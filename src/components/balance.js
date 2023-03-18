import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const Balance = (props) => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex w-full justify-center">
      <div className="md:flex alert shadow-md mx-10 my-2 justify-center w-8/12">
        <div>
          <div>
            Amount left:
            <h3 className="font-bold">INR {total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
