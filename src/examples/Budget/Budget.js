import React from 'react'
import { BudgetProvider } from "./BudgetState";
import Counter from './Counter'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction';
import './Budget.css'

const Budget = () => {
  
  return (
    <BudgetProvider>
    <div className="container-budget">
    <h4>Your Balance</h4>
      <h1 id="balance">$200</h1>

      <Counter />
    {/* List */}
   <TransactionList />

      {/* Add transaction */}
    <AddTransaction />
    </div>
  </BudgetProvider>
  )
}

export default Budget
