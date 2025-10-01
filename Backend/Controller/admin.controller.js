import User from '../models/User.model.js';
import projects from '../models/Project.model.js';

export const admincontroller = async (req, res) => {
  try {
    const userscount = await User.countDocuments({});

    const projectcount = await projects.countDocuments({});

    const totalorders = await User.aggregate([
      { $project: { ordercount: { $size: '$orders' } } },
      { $group: { _id: null, totalorders: { $sum: '$ordercount' } } },
    ]);

    res.status(200).send({
      message: 'your info',
      data: { userscount, projectcount, totalorders },
    });
  } catch (err) {
    res.status(500).send({ message: 'internal server error' });
  }
};
