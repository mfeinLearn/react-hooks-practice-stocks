import { Component } from "react";
import Stock from "./Stock";

class StockContainer extends Component {
  // stockList = this.props.stocks.map((stock) => {
  //   return (
  //     <Stock
  //       name={stock.name}
  //       price={stock.price}
  //       handleAddStock={this.props.handleAddStock}
  //       stock={stock}
  //       key={stock.id}
  //     />
  //   );
  // });

  render() {
    return (
      <div>
        <h2>Stocks</h2>

        {this.props.stocks.map((stock) => {
          return (
            <Stock
              name={stock.name}
              price={stock.price}
              handleAddStock={this.props.handleAddStock}
              stock={stock}
              key={stock.id}
            />
          );
        })}
        {/* {this.stockList ? this.stockList : "ops.."} */}
      </div>
    );
  }
}

export default StockContainer;
