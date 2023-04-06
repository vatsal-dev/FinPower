import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";
import "../App.css";
import { WithContext as ReactTags } from "react-tag-input";

export const Newtransaction = () => {
  const options = [
    { value: "exp", label: "Exp" },
    { value: "gift", label: "Gift" },
    { value: "borrow", label: "Borrow" },
    { value: "lend", label: "Lend" },
  ];

  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState(options[0].value);
  const [person, setPerson] = useState("");
  const [tags, setTags] = useState([]);

  const handleOptionChange = (value) => {
    setType(value);
  };

  const onSubmit = (text, amount, type, person, tags) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseInt(amount, 10),
      type: type,
      person: person,
      tag: tags,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
    setTags([]);
    setPerson("");
  };

  const handleTagAddition = (tag) => {
    setTags([...tags, tag]);
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
                  className="fluent-textbox my-1"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />
              </div>

              <div>
                <ReactTags
                  tags={tags}
                  handleAddition={handleTagAddition}
                  allowNew={true}
                  placeholder="Add a tag"
                  classNames={{
                    tagInputField: "fluent-textbox",
                    tag: "fluent-bg-gradient bg-indigo-100 text-indigo-800 inline-flex items-center rounded-full py-1.5 px-2.5 mb-2 mr-2 my-1",
                    remove:
                      "ml-1 inline-block align-middle cursor-pointer opacity-50 hover:opacity-100",
                    tagInput: "w-full focus:outline-none",
                    suggestions:
                      "flex flex-wrap absolute z-10 bg-white border rounded w-full py-2 mt-1",
                    suggestionActive: "bg-indigo-100",
                  }}
                />
              </div>

              <div className="flex-auto w-full">
                <input
                  id="money"
                  type="number"
                  placeholder="Amount in INR"
                  className="fluent-textbox my-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap justify-start gap-4">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="inline-flex items-center cursor-pointer text-gray-700"
                  >
                    <input
                      type="radio"
                      className="form-radio h-3 w-3 text-purple-600"
                      value={option.value}
                      checked={type === option.value}
                      onChange={() => handleOptionChange(option.value)}
                    />
                    <span className="ml-1">{option.label}</span>
                  </label>
                ))}
              </div>

              {type === "borrow" || type === "lend" ? (
                <div>
                  <div className="text-xs justify flex">
                    Whom did you borrow from/lent to?{" "}
                  </div>
                  <select
                    className="select select-bordered select-sm w-full max-w-xs my-1"
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
                  className="fluent-button w-full"
                  onClick={() => onSubmit(text, amount, type, person, tags)}
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
