import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";
import "../App.css";

export const Newtransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState("E");
  const [person, setPerson] = useState("Da");

  const onSubmit = (text, amount, type, person) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseInt(amount, 10),
      type: type,
      person: person,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <div className="flex w-full justify-center">
      <div className="alert shadow-md mx-10 my-2 justify-center w-8/12">
        <div>
          <div className="">
            <h3 className="font-bold">Add New Transaction</h3>
            <div className="grid grid-flow-row auto-rows-max">
              <div className="flex-auto w-full">
                <input
                  id="desc"
                  type="text"
                  placeholder="Description"
                  className="block w-full pl-3 pr-10 py-2 rounded-lg border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 shadow-md"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <div className="flex-auto w-full">
                <input
                  id="money"
                  type="number"
                  placeholder="Amount in INR"
                  className="block w-full pl-3 pr-10 py-2 rounded-lg border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1 shadow-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <select
                class="block appearance-none w-full bg-white border-gray-300 text-gray-900 py-2 pl-3 pr-10 rounded-lg shadow-md leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent my-1"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option selected value="E">
                  Expenditure
                </option>
                <option value="B">Borrowed</option>
                <option value="L">Lent</option>
                <option value="G">Gift</option>
              </select>

              {type === "B" || type === "L" ? (
                <div>
                  <div className="text-xs justify flex">
                    Whom did you borrow from/lent to?{" "}
                  </div>
                  <select
                    class="select select-bordered select-sm w-full max-w-xs my-1"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                  >
                    <option selected value="Da">
                      Da
                    </option>
                    <option value="Ar">Ar</option>
                    <option value="Va">Va</option>
                    <option value="Pr">Pr</option>
                    <option value="Na">Na</option>
                  </select>
                </div>
              ) : null}

              <div className=" w-full my-1">
                <button
                  className="fluent-button"
                  onClick={() => onSubmit(text, amount, type, person)}
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
