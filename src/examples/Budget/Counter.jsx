import React, { useContext } from "react";
import { BudgetContext } from "./BudgetState";

const Counter = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="container-counter">
      <div className="counter-box">
      <button className="btn btn-square-5 btn-round-3 btn-neon-border color-green-lightgreen">
        <h4 style={{fontSize: '30px'}}>Income</h4>
          <p id="money-plus" style={{fontSize: '20px'}}>
            +${income}
          </p>
      </button>
        
      </div>
      <div className="counter-box">
      <button className="btn btn-square-5 btn-round-3 btn-neon-border color-red-lightred">
        <h4 style={{fontSize: '30px'}}>Expense</h4>
          <p id="money-minus" style={{fontSize: '20px'}}>
            -${expense}
          </p>
      </button>
      </div>
    </div>
  );
};

export default Counter;
