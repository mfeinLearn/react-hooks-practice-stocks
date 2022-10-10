import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [initialStocks, setInitialStocks] = useState([]);

  useEffect(() => {
    getText("http://localhost:3001/stocks");

    async function getText(file) {
      let x = await fetch(file);
      let fetchedStocks = await x.json();
      setStocks(fetchedStocks);
      setInitialStocks(fetchedStocks);
    }
  }, []);

  function handleAddStock(stockClicked) {
    const stockMyPortfolio = portfolio.filter(
      (aStock) => aStock.id === stockClicked.id
    );

    if (!stockMyPortfolio[0]) {
      setPortfolio([...portfolio, stockClicked]);
    }
  }

  function deleteStock(deleteStockObj) {
    setPortfolio((p) => p.filter((stock) => stock.id !== deleteStockObj.id));
  }

  function megaSort(collectionOfStocks, tickerToggleEnable = false) {
    if (tickerToggleEnable) {
      collectionOfStocks.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }

        return 0;
      });
      return collectionOfStocks;
    } else {
      collectionOfStocks.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      return collectionOfStocks;
    }
  }

  function sortArr(event) {
    // console.log("this is the event: ", event.target.value);
    setSortBy(event.target.value);
    if (sortBy === "Alphabetically") {
      //
      setStocks(megaSort(stocks, !!sortBy));
    } else {
      //
      setStocks(megaSort(stocks, !sortBy));
    }
  }

  function filterArr(event) {
    //console.log(event.target.value);
    setStocks(initialStocks);
    setStocks((s) =>
      s.filter((stock) => {
        return stock.type === event.target.value;
      })
    );
  }

  return (
    <div>
      <SearchBar sortArr={sortArr} filterArr={filterArr} />
      {/* {console.log("this is stocks: ", megaSort(stocks, true))} */}
      <div className="row">
        <div className="col-8">
          <StockContainer handleAddStock={handleAddStock} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} deleteStock={deleteStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
