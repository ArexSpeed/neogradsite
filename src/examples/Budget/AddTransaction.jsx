import React, { useState, useContext } from "react";
import { BudgetContext } from "./BudgetState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(BudgetContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: parseInt(amount)
    };

    addTransaction(newTransaction);
  };

  return (
    <>
    <button className="btn-rect-long-4 btn-double-border color-yellow-lightyellow"><h3>Add new transaction</h3></button>
      <form className="form-budget" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            className='form-input'
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
      </div>
        <div className="form-control">
          
          <input
            className='form-input'
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter +/- amount..."
          />
          <label htmlFor="amount">Add "-" if negative</label>
        </div>
        <div className="form-button">
        <button className="btn btn-rect-5 btn-round-3 btn-surround-border-hover color-neonblue">Add transaction</button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
