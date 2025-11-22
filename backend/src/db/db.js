import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.log("MONGODB_URI missing in .env");
      process.exit(1);
    }

    console.log("Using MongoDB URI:", uri);

    const connection = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
