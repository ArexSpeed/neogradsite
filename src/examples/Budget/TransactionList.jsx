import React, { useContext } from "react";
import { BudgetContext } from "./BudgetState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(BudgetContext);

  return (
    <>
      <button className="btn btn-rect-4 btn-double-border color-yellow-lightyellow"><span style={{fontSize: '20px'}}>List</span></button>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
