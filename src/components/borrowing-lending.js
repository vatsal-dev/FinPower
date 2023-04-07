import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const BorrowingLending = () => {
  const { transactions } = useContext(GlobalContext);

  const totals = {};

  transactions.forEach((transaction) => {
    if (transaction.type === "borrow" || transaction.type === "lend") {
      if (!totals[transaction.person]) {
        totals[transaction.person] = 0;
      }
      if (transaction.type === "borrow") {
        totals[transaction.person] += transaction.amount;
      }
      if (transaction.type === "lend") {
        totals[transaction.person] -= transaction.amount;
      }
    }
  });

  const { askforMoney, payBack } = Object.entries(totals).reduce(
    (acc, [key, value]) => {
      if (value < 0) {
        acc.askforMoney[key] = value;
      } else {
        acc.payBack[key] = value;
      }
      return acc;
    },
    { askforMoney: {}, payBack: {} }
  );

  return (
    <div className="flex flex-wrap justify-center">
      <div className="sm:flex alert shadow-lg mx-10 my-2 justify-center w-full ">
        <div>
          <div className="sm:flex w-full">
            <div className="flex w-full justify-center">
              {Object.entries(askforMoney).map(([key, value]) => (
                <div className=" card-compact w-full bg-lime-300 shadow-md rounded-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-1 mx-1 my-1">
                  <div className="card-body flex items-center justify-between">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full h-8 w-8 flex items-center justify-center">
                        <span className="text-xs">{key}</span>
                      </div>
                    </div>
                    <p>You need to ask INR {-value} to settle up!</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full justify-center">
              {Object.entries(payBack).map(([key, value]) => (
                <div className="card-compact w-full bg-red-300 shadow-md rounded-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-1 mx-1 my-1">
                  <div className="card-body flex items-center justify-between">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full h-8 w-8 flex items-center justify-center">
                        <span className="text-xs">{key}</span>
                      </div>
                    </div>
                    <p>You need to pay INR {value} to settle up!</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
