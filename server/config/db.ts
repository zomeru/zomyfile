import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {});
  } catch (error: any) {
    console.log('Connection Error', error.message);
  }

  const connection = mongoose.connection;
  if (connection.readyState >= 1) {
    console.log('Connected to database.');
  }

  connection.on('error', () => console.log('Connection failed.'));
};

export default connectDB;
