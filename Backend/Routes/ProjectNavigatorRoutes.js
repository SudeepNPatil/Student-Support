import express from 'express';
import ProjectNavigator from '../models/ProjectNavigator.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, date, time, language, email } = req.body;

  try {
    const newProjectNavigator = new ProjectNavigator({
      email,
      name,
      date,
      time,
      language,
    });

    const saveddata = await newProjectNavigator.save();

    res.status(201).json({
      message: 'We Review your request and will connect with you soon..!',
      data: saveddata,
    });
  } catch (error) {
    console.error('/ProjectNavigator route error', error.message);
    res.status(500).json({ message: 'server error' });
  }
});

router.delete('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const deletesession = await ProjectNavigator.findOneAndDelete({ email });

    if (!deletesession) {
      return res
        .status(404)
        .json({ message: 'something went wrong ..Please try again!' });
    }

    res.json({ message: 'session cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
