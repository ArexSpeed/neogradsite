import React, { useContext } from "react";
import { BudgetContext } from "./BudgetState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(BudgetContext);

  return (
    <li className='list-element'>
      <button className={transaction.amount > 0 ? "btn btn-rect-long-5 btn-round-3 btn-grad color-green-lightgreen" : "btn btn-rect-long-5 btn-round-3 btn-grad color-red-lightred"}>{transaction.text}</button>

      <button className={transaction.amount > 0 ?
      "btn btn-circle-2 btn-neon-border color-green" : "btn btn-circle-2 btn-neon-border color-neonred"}>
        ${Math.abs(transaction.amount)}
      </button>
        <button className="btn btn-square-2 btn-round-2 btn-border-move-light color-red"
         onClick={() => deleteTransaction(transaction.id)}>X</button>
      
    </li>
  );
};

export default Transaction;
