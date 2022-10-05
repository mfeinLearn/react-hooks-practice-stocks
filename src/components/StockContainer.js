import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ inTheStockContainerThenMain }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    getText("http://localhost:3001/stocks");

    async function getText(file) {
      let x = await fetch(file);
      let fetchedStocks = await x.json();
      setStocks(fetchedStocks);
      console.log("This is the response: ", fetchedStocks);
      // document.getElementById("demo").innerHTML = y;
    }
  }, []);

  const stockList = stocks.map((stock) => {
    return (
      <Stock
        name={stock.name}
        price={stock.price}
        inTheStockContainer={inTheStockContainerThenMain}
      />
    );
  });

  return (
    <div>
      <h2>Stocks</h2>
      {console.log("This is our stocks in state: ", stocks)}
      {/* render stock list here*/}
      {stockList}
    </div>
  );
}

export default StockContainer;
