import express from 'express';
import User from '../models/User.model.js';
import Project from '../models/Project.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, projectId } = req.body;

    if (!email || !projectId) {
      return res
        .status(400)
        .json({ message: 'Email and projectId are required.' });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $addToSet: { orders: projectId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    return res.status(200).json({
      message: 'Added to orders successfully',
      orders: updatedUser.orders,
    });
  } catch (err) {
    console.error('Error in /orders route:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/cancle', async (req, res) => {
  const { email, projectId } = req.body;

  if (!email || !projectId) {
    return res
      .status(400)
      .json({ message: 'Email and projectId are required' });
  }

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { orders: projectId } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: 'User not found' });

    const ordersProjectIds = (user.orders || []).map((id) => Number(id));
    const ordersProjects = await Project.find({
      projectId: { $in: ordersProjectIds },
    });

    const updatedUser = {
      ...user._doc,
      ordersdetails: ordersProjects,
    };

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.get('/allordersinfo', async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    const result = [];

    for (const user of users) {
      // If user has no orders, skip it
      if (!user.orders || user.orders.length === 0) continue;

      const numericOrderIds = user.orders.map((id) => Number(id));

      // Fetch project details using IDs from orders[]
      const projects = await Project.find({
        projectId: { $in: numericOrderIds },
      });

      // Merge & push result
      result.push({
        userInfo: {
          name: user.firstname + '' + user.lastname,
          email: user.email,
        },
        orders: projects, // full project details
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return res.status(500).json({ message: 'Server Error', error });
  }
});

export default router;
