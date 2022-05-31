import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL);
mongoose.Promise = global.Promise;

export { mongoose };
