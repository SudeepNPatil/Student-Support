import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  res.send({ message: 'request recieved from the chatbot' });
});

export default router;
