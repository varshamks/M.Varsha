import mongoose from 'mongoose';

const connectDB = async (URI:string) => {
  try {
    await mongoose.connect(URI,{dbName:'srkroe'}) 
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
