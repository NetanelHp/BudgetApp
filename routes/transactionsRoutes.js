const express = require("express");
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactionsController");
const router = express.Router();

router.route("/").post(getTransactions);

router.route("/add").post(addTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;
