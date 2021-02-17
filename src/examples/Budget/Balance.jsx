import React, { useContext } from "react";
import { BudgetContext } from "./BudgetState";

const Balance = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 style={{color: "#fff"}}>Your Balance</h4>
          <button
            className={
              total > 0
                ? "btn btn-rect-5 btn-round-3 btn-double-border color-green"
                : "btn btn-rect-5 btn-round-3 btn-double-border color-red"
            }
          >
            <span style={{ fontSize: "30px" }}>${total}</span>
          </button>
    </>
  );
};

export default Balance;
