import { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
// import React, { useState, useEffect } from "react";

class MainContainer extends Component {
  // constructor() {
  //   super();
  state = {
    stocks: [],
    portfolio: [],
    sortBy: "Alphabetically",
    initialStocks: [],
  };
  // }

  componentDidMount() {
    fetch(`http://localhost:3001/stocks`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          stocks: data,
          initialStocks: data,
        })
      );
  }

  // componentDidUpdate(previousProps, previousState) {
  //   // console.log("this is previousState: ", previousState);
  //   // this.setState({
  //   //   stocks: previousState,
  //   // });
  //   //   if (previousProps.data !== this.props.data) {
  //   // this.setState({
  //   //   /*....*/
  //   // });
  //   //   }
  //   if (previousState.stocks.length !== this.state.stocks.length) {
  //     this.setState({
  //       stocks: previousState.initialStocks,
  //     });
  //   }
  // }

  // componentDidUpdate() {
  //   fetch(`http://localhost:3001/stocks`)
  //     .then((res) => res.json())
  //     .then((data) =>
  //       this.setState({
  //         stocks: data,
  //         initialStocks: data,
  //       })
  //     );
  // }

  handleAddStock = (stockClicked) => {
    let stockMyPortfolio = this.state.portfolio.filter(
      (aStock) => aStock.id === stockClicked.id
    );
    console.log(stockMyPortfolio);
    //debugger;
    //let placeholder = !stockMyPortfolio[0];

    //if (placeholder) {

    // if (!stockMyPortfolio) {
    //   this.setState({
    //     portfolio: [...this.state.portfolio, stockClicked],
    //   });
    // }

    if (!!stockMyPortfolio) {
      this.setState((previousState, props) => ({
        portfolio: [...previousState.portfolio, stockClicked],
      }));
    }
  };

  deleteStock = (deleteStockObj) => {
    this.setState((previousState, props) => ({
      portfolio: previousState.portfolio.filter(
        (stock) => stock.id !== deleteStockObj.id
      ),
    }));
  };

  megaSort = (collectionOfStocks, tickerToggleEnable = false) => {
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
  };

  ///
  // this.setState((p, props) => ({
  //   portfolio: p.filter((stock) => stock.id !== deleteStockObj.id),
  // }));

  ///

  sortArr = (event) => {
    console.log("this is the event: ", event.target.value);

    // if (this.state.sortBy === "Alphabetically") {
    //   this.setState(() => ({
    //     stocks: this.megaSort(this.state?.stocks, !!this.state?.sortBy),
    //   }));
    // } else {
    //   this.setState(() => ({
    //     stocks: this.megaSort(this.state?.stocks, !this.state?.sortBy),
    //   }));
    // }
    if (this.state.sortBy === event.target.value) {
      this.setState(() => ({
        stocks: this.megaSort(this.state.stocks, !!this.state.sortBy),
      }));
    } else {
      this.setState(() => ({
        stocks: this.megaSort(this.state.stocks, !this.state.sortBy),
      }));
    }
  };

  filterArr = (event) => {
    //console.log(event.target.value);
    this.setState({
      stocks: this.state.initialStocks,
    });

    this.setState((previousState, props) => ({
      stocks: previousState.stocks.filter((stock) => {
        return stock.type === event.target.value;
      }),
    }));
  };

  render() {
    return (
      <div>
        <SearchBar
          sortArr={(e) => this.sortArr(e)}
          filterArr={(e) => this.filterArr(e)}
        />

        {/* <div style={{ "text-align": "center" }}> */}
        <div className="ui centered card">
          <div style={{ float: "left" }}>
            <StockContainer
              handleAddStock={this.handleAddStock}
              stocks={this.state.stocks}
            />
          </div>
          <div style={{ float: "right" }}>
            <PortfolioContainer
              stocks={this.state.portfolio}
              deleteStock={this.deleteStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;

// <div className="row">
// <div className="col-8">
//   <StockContainer
//     handleAddStock={this.handleAddStock}
//     stocks={this.state.stocks}
//   />
// </div>
// <div className="col-4">
//   <PortfolioContainer
//     stocks={this.state.portfolio}
//     deleteStock={this.deleteStock}
//   />
// </div>
