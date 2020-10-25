const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI ||
        "MONGODB_URI=mongodb+srv://netanel:netanel123@budget.c1hkp.mongodb.net/trans?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      console.log("Connected to DB")
    );
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
