import { Component } from "react";

// function Stock({ name, price, handleAddStock, stock }) {
class Stock extends Component {
  handleClick = () => {
    this.props.handleAddStock(this.props.stock);
  };

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <div
          className="card"
          style={{
            padding: "15px",
            border: "1px solid rgb(232,232,232)",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.price}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Stock;
