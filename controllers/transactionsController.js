const Transaction = require("../models/Transaction");

//   Get Transactions
//   GET /api/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ userID: req.body.userID });

    return res.status(200).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
//   Add Transaction
//   POST /api/transactions
exports.addTransaction = async (req, res, next) => {
  try {
    const newTransaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: newTransaction,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
//   Delete Transaction
//   DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
