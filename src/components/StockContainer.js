import Stock from "./Stock";

function StockContainer({ stocks, handleAddStock }) {
  const stockList = stocks.map((stock) => {
    return (
      <Stock
        name={stock.name}
        price={stock.price}
        handleAddStock={handleAddStock}
        stock={stock}
        key={stock.id}
      />
    );
  });
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
