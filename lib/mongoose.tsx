import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) return console.log("MONGODB url not found!");
  if (isConnected) console.log("alreaady connected to MONGODB");

  try {
    mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("connected to MONGODB!");
  } catch (error) {
    console.log(error);
  }
};

