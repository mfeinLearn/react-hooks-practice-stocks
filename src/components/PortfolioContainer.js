import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function PortfolioContainer({ buy }) {
  const [myStocks, setMyStocks] = useState([]);

  console.log("from the PortfolioContainer: ", buy);

  return (
    <div>
      <h2>My Portfolio</h2>

      {
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
