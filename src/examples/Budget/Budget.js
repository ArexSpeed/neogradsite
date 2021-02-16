import React from 'react'
import { BudgetProvider } from "./BudgetState";

import Counter from './Counter'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import './Budget.css'

const Budget = () => {

  return (
    <BudgetProvider>
      <div className="container-budget">
        <div className="container-glass">
          <Balance />

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
