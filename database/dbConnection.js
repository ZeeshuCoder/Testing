import mongoose from "mongoose";

// ====for connected to mongodb====
export const dbConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      dbName: "MERN_STACK_JOB_SEEKING",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error in mongodb connection", error);
  }
};
