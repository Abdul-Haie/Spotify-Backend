import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connection established");
  });
  mongoose
    .connect(`${process.env.MONGODB_URI}/spotify`)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Couldn't connect to MongoDB "+error);
    });
};

export default connectDB;
