import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../conext/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const color = transaction.amount > 0 ? "blue" : "red";

  return (
    <ListItem>
      <ListItemText
        style={{ maxWidth: 300 }}
        id={transaction.id}
        primary={transaction.text}
      />
      <ListItemText
        id={transaction.id}
        primary={transaction.amount + " NIS"}
        style={{ color }}
      />
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => deleteTransaction(transaction._id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Transaction;
