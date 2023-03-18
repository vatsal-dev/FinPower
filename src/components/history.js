import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalStats";
import { useState } from "react";
import { ExpenditureGifts } from "./../components/expenditure-gifts";
import { BorrowingLending } from "./../components/borrowing-lending"

export const History = (props) => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabClick = (event, tabID) => {
    event.preventDefault();
    setSelectedTab(tabID);
  };

  return (
    <div>
      <div className="tabs flex justify-center my-2">
        <a
          href="#tab1"
          className={selectedTab === "tab1" ? "tab tab-lifted tab-active" : "tab tab-lifted"}
          onClick={(e) => handleTabClick(e, "tab1")}
        >
          Expenditure and Gifts
        </a>
        <a
          href="#tab2"
          className={selectedTab === "tab2" ? "tab tab-lifted tab-active" : "tab tab-lifted"}
          onClick={(e) => handleTabClick(e, "tab2")}
        >
          Borrowing and Lending
        </a>
      </div>

      <div>{selectedTab === "tab1" && <ExpenditureGifts />}</div>
      <div>{selectedTab === "tab2" && <BorrowingLending />}</div>
    </div>
  );
};
