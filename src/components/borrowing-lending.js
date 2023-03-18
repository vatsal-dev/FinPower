import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const BorrowingLending = () => {
  const { transactions } = useContext(GlobalContext);

  const totals = {};

  transactions.forEach((transaction) => {
    if (transaction.type === "B" || transaction.type === "L") {
      if (!totals[transaction.person]) {
        totals[transaction.person] = 0;
      }
      if (transaction.type === "B") {
        totals[transaction.person] += transaction.amount;
      }
      if (transaction.type === "L") {
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
    <div className="flex w-full justify-center">
      <div className="sm:flex alert shadow-lg mx-10 my-2 justify-center w-8/12">
        <div>
          <div className="sm:flex w-full">
            <div className="flex w-full justify-center">
              {Object.entries(askforMoney).map(([key, value]) => (
                <div className=" card-compact w-60 bg-lime-300 shadow-md rounded-lg my-2 mx-1 w-8/12">
                  <div className="card-body">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span className="text-xs">{key}</span>
                      </div>
                    </div>
                    <p>You need to ask INR {-value} to settle up!</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider divider-horizontal"></div>

            <div className="flex w-full justify-center">
              {Object.entries(payBack).map(([key, value]) => (
                <div className="card-compact w-60 bg-red-300 shadow-md rounded-lg my-2 mx-1 w-8/12">
                  <div className="card-body">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
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
