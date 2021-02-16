import React, {useContext} from 'react'
import { BudgetProvider } from "./BudgetState";
import { BudgetContext } from "./BudgetState";

import Counter from './Counter'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction';
import './Budget.css'

const Budget = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (
    <BudgetProvider>
      <div className="container-budget">
        <div className="container-glass">
          <h4>Your Balance</h4>
          <button
            className={
              total > 0
                ? "btn btn-rect-5 btn-round-3 btn-double-border color-green"
                : "btn btn-rect-5 btn-round-3 btn-double-border color-red"
            }
          >
            <span style={{ fontSize: "30px" }}>${total}</span>
          </button>

          <Counter />
          {/* List */}
          <TransactionList />

          {/* Add transaction */}
          <AddTransaction />
        </div>
      </div>
    </BudgetProvider>
  );
}

export default Budget
