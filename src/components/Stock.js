import React from "react";

function Stock({
  name,
  price,
  inTheStockContainer,
  theStock,
  deleteStock,
  isFromPorfolioComponent,
}) {
  // const handleClick = (event) => {
  //   console.log("Button clicked");
  //   const createdObj = { keyOfObj: "valueOfObj" };
  //   inTheStockContainer(createdObj);
  // };

  function navigator(e, clickedStock) {
    console.log("A stock in my porfolio: ", isFromPorfolioComponent);
    if (isFromPorfolioComponent) {
      // console.log(clickedStock);
      deleteStock(e, clickedStock);
    } else {
      inTheStockContainer(e, clickedStock);
    }
  }
  // <div onClick={(e) => inTheStockContainer(e, theStock)}>
  return (
    <div onClick={(e) => navigator(e, theStock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
