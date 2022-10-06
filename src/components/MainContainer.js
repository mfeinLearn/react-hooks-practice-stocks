import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  // added off line
  const [buy, setBuy] = useState({});

  function theTransporter(obj) {
    // console.log("logging the obj: ", obj);
    setBuy(obj);
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer theTransporter={theTransporter} />
        </div>
        <div className="col-4">
          <PortfolioContainer buy={buy} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
