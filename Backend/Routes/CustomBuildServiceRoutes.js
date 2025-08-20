import express from 'express';
import CustomBuildService from '../models/CustomBuildService.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, Phnumber, Email, describe, unic } = req.body;

  try {
    const newCustomBuildService = new CustomBuildService({
      unic,
      name,
      Phnumber,
      Email,
      describe,
    });

    const saveddata = await newCustomBuildService.save();

    res.status(201).json({
      message: 'We Review your request and will connect with you soon..!',
      data: saveddata,
    });
  } catch (error) {
    console.error('/CustomBuildService route error', error.message);
    res.status(500).json({ message: 'server error' });
  }
});

router.delete('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const deletesession = await CustomBuildService.findOneAndDelete({ email });

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
