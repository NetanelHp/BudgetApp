import React, { useEffect, useContext } from "react";
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import { GlobalContext } from "../conext/GlobalState";

const AddTrans = () => {
  const { getTransactions, user } = useContext(GlobalContext);

  useEffect(() => {
    if (user) {
      const userid = {
        userID: user._id,
      };
      getTransactions(userid);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className="AddTrans">
      {user && (
        <h1>
          Welcome<span> </span>
          {user.name}
        </h1>
      )}
      <div className="transactions">
        <Income />
        <Expense />
      </div>
      <div className="balance">
        <Balance />
      </div>
    </div>
  );
};

export default AddTrans;
