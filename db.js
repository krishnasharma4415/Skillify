import mongoose from 'mongoose';

const connectionString = "mongodb://localhost:27017/SkillifyDatabase";

mongoose.connect(connectionString)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error(err));

export default mongoose;