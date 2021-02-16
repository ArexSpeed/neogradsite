import React, { useContext } from "react";
import { BudgetContext } from "./BudgetState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(BudgetContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const signClass = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li className={signClass}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">
        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
      </button>
    </li>
  );
};

export default Transaction;
