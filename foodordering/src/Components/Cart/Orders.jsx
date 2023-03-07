import React from "react";
import "../../Pages/Detailedcart.css";

const Filledcart = (props) => {
  return (
    <>
      <div className="filledCart">
        <div className="fooddetailswrapper">
          <div className="priceandquantity">
            <h1 className="cartfoodname">{props.foodname}</h1>
            <h1 className="cartfoodquantity">x{props.foodquantity}</h1>
          </div>
          <h1 className="cartfoodprice">${props.foodprice}</h1>
        </div>
      </div>
    </>
  );
};

export default Filledcart;
