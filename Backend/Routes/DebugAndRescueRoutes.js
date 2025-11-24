import express from 'express';
import DebugAndRescue from '../models/DebugAndRescue.model.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('screenshots'), async (req, res) => {
  const { name, whatsapp, describe, email } = req.body;

  try {
    const newDebugAndRescue = new DebugAndRescue({
      email,
      name,
      whatsapp,
      describe,
      screenshots: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        size: req.file.size,
        fileName: req.file.originalname,
      },
    });

    const saveddata = await newDebugAndRescue.save();

    let base64Image = null;
    if (saveddata.screenshots && saveddata.screenshots.data) {
      base64Image = saveddata.screenshots.data.toString('base64');
    }

    res.status(201).json({
      message: 'We Review your request and will connect with you soon..!',
      data: {
        ...saveddata._doc,
        screenshots: base64Image
          ? `data:${saveddata.screenshots.contentType};base64,${base64Image}`
          : null,
      },
    });
  } catch (error) {
    console.error('/DebugAndRescue route error', error.message);
    res.status(500).json({ message: 'server error' });
  }
});

router.delete('/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const deletesession = await DebugAndRescue.findOneAndDelete({ email });

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

router.get('/debugs', async (req, res) => {
  try {
    const alldebugs = await DebugAndRescue.find({});

    if (!alldebugs || alldebugs.length === 0) {
      return res.status(200).send({ message: 'No debugs found', debugs: [] });
    }

    res.json({ message: 'All debugs info', debugs: alldebugs });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
