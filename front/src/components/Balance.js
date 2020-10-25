import React, { useContext } from "react";
import { GlobalContext } from "../conext/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts.reduce((acc, val) => acc + val, 0);

  return (
    <div>
      <h1>Your balance</h1>
      <h3>{numberWithCommas(totalAmount)} NIS</h3>
    </div>
  );
};

export default Balance;
