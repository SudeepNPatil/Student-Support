import express from 'express';
import User from '../models/User.model.js';
import Project from '../models/Project.model.js';
import ProjectInfo from '../models/projectInfo.model.js';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcrypt';
import { sendWelcomeEmail } from '../Utils/email.util.js';

const router = express.Router();

const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
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
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already registered' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const newuser = new User({
      firstname,
      lastname,
      email,
      password:hashedPassword,
      role:'user'
    });
    await newuser.save();
    const token = createToken(email);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    await sendWelcomeEmail('sudeeppatil873@gmail.com', `${firstname} ${lastname}`);
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

     const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
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
    console.error('Login error:', error.message);
    return res
      .status(500)
      .json({ message: 'Server error', error: error.message });
  }
});

router.put('/', async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not logged in' });
  
    try {
    const decoded = jwt.verify(token, 'secret_Code');
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const allowedFields = ['firstname', 'lastname', 'email', 'phone', 'dob', 'city', 'state', 'pincode', 'username'];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field];
      }
    });

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', ...user._doc });
  } catch (err) {
    console.error('Error in PUT /User route:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
  
});

router.delete('/', async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not logged in' });  
  try {
    const decoded = jwt.verify(token, 'secret_Code');
    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    await User.deleteOne({ email: decoded.email });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error in DELETE /User route:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
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
