import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const ExpenditureGifts = () => {
  const { transactions } = useContext(GlobalContext);

  const [expenditure, setExpenditure] = useState({});
  const [gifts, setGifts] = useState({});

  useEffect(() => {
    let newExpenditure = {};
    let newGifts = {};

    transactions.forEach((transaction) => {
      if (transaction.type === "exp") {
        if (!newExpenditure[transaction.text]) {
          newExpenditure[transaction.text] = transaction.amount;
        } else {
          newExpenditure[transaction.text] += transaction.amount;
        }
      } else if (transaction.type === "gift") {
        if (!newGifts[transaction.text]) {
          newGifts[transaction.text] = transaction.amount;
        } else {
          newGifts[transaction.text] += transaction.amount;
        }
      }
    });

    setExpenditure(newExpenditure);
    setGifts(newGifts);
  }, [transactions]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-2">
        <div className="p-2 bg-red-300 text-black">
          <h2 className="text-lg font-semibold">Expenses</h2>
        </div>
        <div className="p-2">
          {Object.keys(expenditure).length === 0 ? (
            <p className="text-gray-500">No expenses to display.</p>
          ) : (
            <ul className="list-disc list-inside">
              {Object.entries(expenditure).map(([key, value]) => (
                <li className="mb-1 flex justify-between" key={key}>
                  <span>{key}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                    INR {value}
                  </span>
                  <button className="inline-flex items-center px-2 py-1 ml-2 border border-transparent text-xs font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-2">
        <div className="p-2 bg-lime-300 text-black">
          <h2 className="text-lg font-semibold">Gifts</h2>
        </div>
        <div className="p-2">
          {Object.keys(gifts).length === 0 ? (
            <p className="text-gray-500">No gifts to display.</p>
          ) : (
            <ul className="list-disc list-inside">
              {Object.entries(gifts).map(([key, value]) => (
                <li className="mb-1 flex justify-between" key={key}>
                  <span>{key}</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                    INR {value}
                  </span>
                  <button className="inline-flex items-center px-2 py-1 ml-2 border border-transparent text-xs font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
