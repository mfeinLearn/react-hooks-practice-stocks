import React, { useState, useEffect } from "react";
import Stock from "./Stock";

let myPortfolioArray = [];
function PortfolioContainer({ buy }) {
  const [myStocks, setMyStocks] = useState([...myPortfolioArray]);
  const fixedMyStocks = myStocks.slice(2);
  // console.log("from the PortfolioContainer: ", buy);

  useEffect(() => {
    const f = () => {
      myPortfolioArray.push(buy);
      setMyStocks([...myPortfolioArray]);
    };

    f(buy);
  }, [buy]);

  function deleteStock(stockToDelete) {
    console.log("deleted stock!", stockToDelete.id);
    console.log("stocks from state: ", myStocks);
    const newStocksArray = fixedMyStocks.filter((stock) => {
      return stock.id !== stockToDelete.id;
    });
    // myPortfolioArray.push([...newStocksArray]);
    setMyStocks(newStocksArray);
    console.log("just to see: ", newStocksArray);
  }

  return (
    <div>
      <h2>My Portfolio</h2>

      {
        //render your portfolio stocks here
      }

      {fixedMyStocks.map((stock) => {
        return (
          <Stock
            key={stock.id}
            name={stock.name}
            price={stock.price}
            // theStock={stock}
            deleteStock={() => deleteStock(stock)}
            isFromPorfolioComponent={true}
          />
        );
      })}
    </div>
  );
}

export default PortfolioContainer;
