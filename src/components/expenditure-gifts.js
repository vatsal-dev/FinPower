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
    <div className="flex">
      <div className="flex alert shadow-lg mx-10 my-2 justify-center">
        <table className=" flex table table-compact w-9/12 justify-center mx-10 shadow-lg rounded-lg">
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
        <table className="table table-compact w-9/12 mx-10  rounded-lg shadow-lg">
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
