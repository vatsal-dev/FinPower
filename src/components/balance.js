import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const Balance = (props) => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-center">
      <div className="alert shadow-lg mx-10 my-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Amount left: INR {total}</h3>
            <div className="text-xs">
              Check balance sheet below for detailed expenses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
