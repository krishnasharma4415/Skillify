import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String},
  username: { type: String},
  email: { type: String, unique: true },
  password: { type: String},
  skills: { type: Array },
  profilePicture: { type: String },
  bio: { type: String },
  DesiredSkills: { type: Array },
  OfferedSkills: { type: Array },
  education: { type: Object },
  experience: { type: Array },
  projects: { type: Array },
});

export default mongoose.model('users', userSchema);