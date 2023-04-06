import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, transaction])
    );
  }

  React.useEffect(() => {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    dispatch({
      type: "LOAD_TRANSACTIONS",
      payload: transactions,
    });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
