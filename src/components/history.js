import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const History = (props) => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

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
            <h3 className="font-bold">History</h3>
            <div className="text-s">
              {transactions.map((transaction) => (
                <div>
                  <button className="btn gap-2 btn-xs">
                    {transaction.text}
                    <div className="badge badge-secondary badge-sm">
                      INR {transaction.amount}
                    </div>
                  </button>
                  <button
                    className="btn btn-error btn-xs mx-2"
                    onClick={() => deleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
