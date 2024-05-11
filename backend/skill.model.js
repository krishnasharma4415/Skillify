import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  users: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Skill = mongoose.model('skills', skillSchema);

export default Skill;
