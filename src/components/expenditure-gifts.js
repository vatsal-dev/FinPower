import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const ExpenditureGifts = () => {
  const { transactions } = useContext(GlobalContext);

  const expenditure = {};
  const gifts = {};
  transactions.forEach((transaction) => {
    if (transaction.type === "E") {
      if (!expenditure[transaction.text]) {
        expenditure[transaction.text] = transaction.amount;
      } else {
        expenditure[transaction.text] += transaction.amount;
      }
    }
    if (transaction.type === "G") {
      if (!gifts[transaction.text]) {
        gifts[transaction.text] = transaction.amount;
      } else {
        gifts[transaction.text] += transaction.amount;
      }
    }
  });

  return (
    <div className="flex w-full justify-center overflow-auto">
      <div className="flex alert shadow-md mx-10 my-2 justify-center w-8/12 overflow-auto">
        <table className=" flex table table-compact justify-center mx-10 shadow-md rounded-lg overflow-auto">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(gifts).map(([key, value]) => (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
                <td>Gifts</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table
          className="table table-compact mx-10 rounded-lg shadow-lg"
          overflow-auto
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(expenditure).map(([key, value]) => (
              <tr>
                <td>{key}</td>
                <td>{value}</td>
                <td>Expenditure</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
