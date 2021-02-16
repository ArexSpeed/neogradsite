import React, { createContext, useReducer } from "react";
import reducer from "./budgetReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Salary", amount: 900 },
    { id: 2, text: "Food", amount: -300 },
    { id: 3, text: "Book", amount: -10 }
  ]
};

//Create context
export const BudgetContext = createContext(initialState);

//Provider component
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
