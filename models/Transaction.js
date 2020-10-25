const mongoose = require("mongoose");

const Transaction = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add amount"],
  },
  userID: String,
});

module.exports = mongoose.model("Transaction", Transaction);
