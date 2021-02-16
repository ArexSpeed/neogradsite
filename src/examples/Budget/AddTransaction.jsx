import React, { useState, useContext } from "react";
import { BudgetContext } from "./BudgetState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(BudgetContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: parseInt(amount)
    };

    addTransaction(newTransaction);
  };

  return (
    <>
    <button className="btn btn-rect-long-4 btn-double-border color-yellow-lightyellow"><h3>Add new transaction</h3></button>
      <form className="form-budget" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
