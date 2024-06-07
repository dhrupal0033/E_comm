import mongoose from "mongoose";
import colors from "colors";

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database connection established`.bgGreen.white);
  } catch (err) {
    console.log(`Error in database connection ${err}`.bgRed.white);
  }
};

export default connectdb;
