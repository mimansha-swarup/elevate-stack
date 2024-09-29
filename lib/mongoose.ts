import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => { 
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGO URL");
  }

  if (isConnected) {
    return console.log("Mogno connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ElevateStack",
    });
    isConnected = true;
  } catch (error) {}
};
