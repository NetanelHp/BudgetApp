import React, { useContext } from "react";
import Transaction from "./Transaction";
import List from "@material-ui/core/List";
import { GlobalContext } from "../conext/GlobalState";

const TransHistory = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transHistory">
      <div className="transList">
        <List className="list" style={{ width: "100%", maxWidth: 700 }}>
          {transactions === [] ? (
            <p>You Have No Transactions</p>
          ) : (
            transactions.map((trans) => {
              return <Transaction key={trans._id} transaction={trans} />;
            })
          )}
        </List>
      </div>
    </div>
  );
};

export default TransHistory;
