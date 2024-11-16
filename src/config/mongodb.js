import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connection established");
  });
  console.log(`${process.env.MONGODB_URI}/spotify`)
  mongoose
    .connect(`${process.env.MONGODB_URI}/spotify`)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch(() => {
      console.log("Couldn't connect to MongoDB");
    });
};

export default connectDB;
