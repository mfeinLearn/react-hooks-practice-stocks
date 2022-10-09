import React, { useState, useEffect, useCallback } from "react";
import Stock from "./Stock";

// let myPortfolioArray = [];
function PortfolioContainer({ buy }) {
  const [myStocks, setMyStocks] = useState([]);
  // const [isInitialRender, setIsInitialRender] = useState(true);

  // const fixedMyStocks = myStocks.slice(2);
  // console.log("from the PortfolioContainer: ", buy);

  const buyStock = useCallback(() => {
    setMyStocks(() => [...myStocks, buy]);
  }, []);

  useEffect(() => {
    buyStock();
  }, [buyStock]);

  // const myStockList = myStocks.map((stock) => {
  //   return (
  //     <Stock
  //       name={stock.name}
  //       price={stock.price}
  //       // theStock={stock}
  //       // inTheStockContainer={inTheStockContainerThenMain}
  //     />
  //   );
  // });

  function deleteStock(stockToDelete) {
    console.log("deleted stock!", stockToDelete.id);
    console.log("stocks from state: ", myStocks);
    const newStocksArray = myStocks.filter((stock) => {
      return stock.id !== stockToDelete.id;
    });
    setMyStocks([...newStocksArray]);
  }

  return (
    <div>
      <h2>My Portfolio</h2>

      {
        //render your portfolio stocks here
      }

      {myStocks?.map((stock) => {
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
