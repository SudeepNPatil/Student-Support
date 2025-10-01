import User from '../models/User.model.js';

export const adminuserinfocontroller = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'internal server error' });
  }
};
