import React from "react";

function Stock({ name, price, inTheStockContainer, theStock }) {
  // const handleClick = (event) => {
  //   console.log("Button clicked");
  //   const createdObj = { keyOfObj: "valueOfObj" };
  //   inTheStockContainer(createdObj);
  // };

  return (
    <div onClick={(e) => inTheStockContainer(e, theStock)}>
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
