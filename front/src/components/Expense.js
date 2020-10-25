import React, { useState, useContext } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { GlobalContext } from "../conext/GlobalState";

const Expense = () => {
  const [expenseText, setExpenseText] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  const { transactions, addTransaction, user } = useContext(GlobalContext);

  const amounts = transactions.map((trans) => trans.amount);
  const totalExpenseAmount = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  const onTextChange = (e) => {
    setExpenseText(e.target.value);
  };

  const onAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      text: expenseText,
      amount: -expenseAmount,
      userID: user._id,
    };

    addTransaction(newTrans);

    setExpenseText("");
    setExpenseAmount(0);
  };

  return (
    <div className="addExpense">
      <h1>Expense</h1>
      {totalExpenseAmount === 0 ? <h3>0</h3> : <h3>{totalExpenseAmount}</h3>}
      <div className="form">
        <FormControl className="form" color="secondary">
          <InputLabel htmlFor="expense-text-input">Add Expense</InputLabel>
          <Input
            value={expenseText}
            onChange={onTextChange}
            autoComplete="off"
            id="expense-text-input"
          />
        </FormControl>

        <FormControl className="form" color="secondary">
          <InputLabel htmlFor="expense-amount-input">Amount</InputLabel>
          <Input
            value={expenseAmount}
            onChange={onAmountChange}
            autoComplete="off"
            id="expense-amount-input"
          />
        </FormControl>

        <Button onClick={onSubmit} variant="contained" color="secondary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Expense;
