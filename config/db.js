import dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const database = mongoose.connection;

  database.on('error', (error) => {
    console.log(error);
  });

  database.once('connected', () => {
    console.log('DB Connected');
  });
};

export default connectDB;
