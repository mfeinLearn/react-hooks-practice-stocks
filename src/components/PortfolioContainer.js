import { Component } from "react";
import Stock from "./Stock";

class PortfolioContainer extends Component {
  // portfolioArr = this.props.stocks.map((stock) => {
  //   return (
  //     <Stock
  //       name={stock.name}
  //       price={stock.price}
  //       handleAddStock={this.props.deleteStock}
  //       stock={stock}
  //       key={stock.id}
  //     />
  //   );
  // });

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {/* {this.portfolioArr} */}
        {this.props.stocks.map((stock) => {
          return (
            <Stock
              name={stock.name}
              price={stock.price}
              handleAddStock={this.props.deleteStock}
              stock={stock}
              key={stock.id}
            />
          );
        })}
      </div>
    );
  }
}

export default PortfolioContainer;
