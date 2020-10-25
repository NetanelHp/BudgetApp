import React, { useContext, useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { GlobalContext } from "../conext/GlobalState";

const Income = () => {
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);

  const { transactions, addTransaction, user } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amount);
  const totalIncomeAmount = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);

  const onTextChange = (e) => {
    setIncomeText(e.target.value);
  };

  const onAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      text: incomeText,
      amount: +incomeAmount,
      userID: user._id,
    };

    addTransaction(newTrans);

    setIncomeText("");
    setIncomeAmount(0);
  };
  return (
    <div className="addIncome">
      <h1>Income</h1>
      <h3>{totalIncomeAmount}</h3>
      <form className="form">
        <FormControl className="form" color="primary">
          <InputLabel htmlFor="income-text-input">Add Income</InputLabel>
          <Input
            value={incomeText}
            onChange={onTextChange}
            type="text"
            autoComplete="off"
            id="income-text-input"
          />
        </FormControl>

        <FormControl className="form" color="primary">
          <InputLabel htmlFor="incomeAmount-input">Amount</InputLabel>
          <Input
            type="number"
            value={incomeAmount}
            onChange={onAmountChange}
            id="income-amount-input"
          />
        </FormControl>

        <Button onClick={onSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Income;
