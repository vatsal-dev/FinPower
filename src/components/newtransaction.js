import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const Newtransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const onSubmit = (text, amount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseInt(amount, 10),
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <div className="flex">
      <div className="alert shadow-lg mx-10 my-2 ">
        <div>
          <div className="">
            <h3 className="font-bold">Add New Transaction</h3>
            <div className="grid grid-flow-row auto-rows-max">
              <div className="flex-auto w-20 mx-2">
                <input
                  id="desc"
                  type="text"
                  placeholder="Description"
                  className="flex-auto w-20 input my-1 input-sm"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="flex-auto w-20 mx-2">
                <input
                  id="money"
                  type="text"
                  placeholder="Amount in INR"
                  className="flex-auto w-20 input  my-1 input-sm"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className=" w-20 my-1">
                <button
                  className=" w-20 btn btn-success btn-sm mx-2"
                  onClick={() => onSubmit(text, amount)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
