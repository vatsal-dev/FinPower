import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const History = (props) => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="alert shadow-lg mx-10 my-2">
        <div>
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
