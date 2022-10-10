import Stock from "./Stock";

function PortfolioContainer({ stocks, deleteStock }) {
  const array = stocks.map((stock) => {
    return (
      <Stock
        name={stock.name}
        price={stock.price}
        handleAddStock={deleteStock}
        stock={stock}
        key={stock.id}
      />
    );
  });
  return (
    <div>
      <h2>My Portfolio</h2>
      {array}
    </div>
  );
}

export default PortfolioContainer;
