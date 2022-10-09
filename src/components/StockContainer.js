import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ theTransporter }) {
  const [stocks, setStocks] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    getText("http://localhost:3001/stocks");

    async function getText(file) {
      let x = await fetch(file);
      let fetchedStocks = await x.json();
      setStocks(fetchedStocks);
      // console.log("This is the response: ", fetchedStocks);
      // document.getElementById("demo").innerHTML = y;
    }
  }, []);

  function inTheStockContainerThenMain(e, theStock) {
    // console.log(" ***--- logging stuff  ---***  ");
    // console.log("event object: ", e);
    // console.log("the stock: ", theStock);
    setId(theStock.id);
    // setBuy(obj);
  }

  const stockList = stocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        name={stock.name}
        price={stock.price}
        theStock={stock}
        inTheStockContainer={inTheStockContainerThenMain}
      />
    );
  });

  const result = (aId) => {
    return stocks.filter((stock) => stock.id === aId);
  };
  theTransporter(result(id)[0]);

  return (
    <div>
      <h2>Stocks</h2>
      {/* {console.log("This is our stocks in state: ", stocks)} */}
      {/* render stock list here*/}
      {stockList}
    </div>
  );
}

export default StockContainer;
