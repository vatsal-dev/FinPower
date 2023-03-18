import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";

export const ExpenditureGifts = () => {
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
    <div className="flex">
      <div className="alert shadow-lg mx-10 my-2 ">
        <div>
          <div className="">
            <h3 className="font-bold">Add New Transaction</h3>
            <div className="grid grid-flow-row auto-rows-max">
              <div className="flex-auto w-full">
                <input
                  id="desc"
                  type="text"
                  placeholder="Description"
                  className="flex-auto w-full input my-1 input-sm"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex-auto w-full">
                <input
                  id="money"
                  type="text"
                  placeholder="Amount in INR"
                  className="flex-auto w-full input  my-1 input-sm"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <select
                class="select select-bordered select-sm w-full max-w-xs my-1"
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
                  {person}
                </div>
              ) : null}

              <div className=" w-full my-1">
                <button
                  className=" w-full btn btn-success btn-sm"
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
