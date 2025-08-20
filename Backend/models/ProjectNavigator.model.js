import mongoose from 'mongoose';

const ProjectNavigatorSchema = mongoose.Schema(
  {
    email: String,
    name: String,
    date: String,
    time: String,
    language: String,
  },
  {
    timestamps: true,
  }
);

const ProjectNavigator = mongoose.model(
  'ProjectNavigator',
  ProjectNavigatorSchema
);

export default ProjectNavigator;
