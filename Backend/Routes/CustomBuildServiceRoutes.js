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

router.delete('/:unic', async (req, res) => {
  try {
    const { unic } = req.params;

    const deletesession = await CustomBuildService.findOneAndDelete({ unic });

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

router.get('/custom', async (req, res) => {
  try {
    const allcustombuilds = await CustomBuildService.find({});

    if (!allcustombuilds || allcustombuilds.length === 0) {
      return res
        .status(200)
        .json({ message: 'No custom build yet', customs: [] });
    }

    res.json({ message: 'All custom builds info', customs: allcustombuilds });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
