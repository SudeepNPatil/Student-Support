import express from 'express';
import User from '../models/User.model.js';
import Project from '../models/Project.model.js';
import ProjectInfo from '../models/projectInfo.model.js';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: {
    status: 429,
    message: 'Too many signup attempts. Please try again after 1 Hour.',
  },
});

const createToken = (email) => {
  return jwt.sign({ email: email }, 'secret_Code', { expiresIn: '15d' });
};

router.post('/', signupLimiter, async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const newuser = new User({
      firstname,
      lastname,
      email,
      password,
    });
    await newuser.save();
    const token = createToken(email);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({ message: 'user registered ssuccefully !' });
  } catch (error) {
    console.error('Signup error', error.message);
    res.status(500).json({ message: 'server error' });
  }
});

router.get('/me', async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not logged in' });

  try {
    const decoded = jwt.verify(token, 'secret_Code');
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(401).json({ message: 'Invalid token' });

    const cartProjectIds = (user.cart || []).map((id) => Number(id));

    const cartProjects = await Project.find({
      projectId: { $in: cartProjectIds },
    });

    const detailsCartProjects = await Promise.all(
      cartProjects.map(async (project) => {
        const info = await ProjectInfo.findOne({ title: project.title });

        return {
          ...project._doc,
          ...(info ? { projectInfo: info._doc } : {}),
        };
      })
    );

    const orderProjectIds = (user.orders || []).map((id) => Number(id));
    const orderProjects = await Project.find({
      projectId: { $in: orderProjectIds },
    });
    const detailsOrderProjects = await Promise.all(
      orderProjects.map(async (project) => {
        const info = await ProjectInfo.findOne({ title: project.title });
        return {
          ...project._doc,
          ...(info ? { projectInfo: info._doc } : {}),
        };
      })
    );

    const userData = {
      ...user._doc,
      cartdetails: detailsCartProjects,
      orderdetails: detailsOrderProjects,
    };

    res.json(userData);
  } catch (err) {
    console.error('Error in /me route:', err);
    res.status(401).json({ message: 'Token invalid' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found!' });
    }

    if (user.password != password) {
      return res.status(400).send({ message: 'invalid credentials' });
    }

    if (user) {
      const token = createToken(email);
      res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 15 * 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ message: 'Login successful', user });
    } else {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    sameSite: 'None',
    secure: true,
  });
  res.json({ message: 'Logged out' });
});

export default router;
