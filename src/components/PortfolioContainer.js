import React, { useState, useEffect } from "react";
import Stock from "./Stock";

const myPortfolioArray = [];
function PortfolioContainer({ buy }) {
  const [myStocks, setMyStocks] = useState([...myPortfolioArray]);

  // console.log("from the PortfolioContainer: ", buy);

  useEffect(() => {
    const f = () => {
      myPortfolioArray.push(buy);
      setMyStocks([...myPortfolioArray]);
    };

    f(buy);
  }, [buy]);

  console.log("this is state from PortfolioContainer: ", myStocks);

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
