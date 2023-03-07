import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../slice/cartdata";
import "../../Pages/Detailedcart.css";

const Filledcart = () => {
  const { items } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  return (
    <>
      {items
        .map((food) => {
          return (
            <div className="filledCart">
              <div className="fooddetailswrapper">
                <div className="priceandquantity">
                  <h1 className="cartfoodname">{food.foodname}</h1>
                  <h1 className="cartfoodquantity">x{food.foodquantity}</h1>
                </div>
                <h1 className="cartfoodprice">${food.foodprice}</h1>
              </div>
              <div className="quantityadjusterwrapper">
                <div className="quantityadjuster">
                  <button
                    className="dec"
                    onClick={() => {
                      dispatch(
                        decrement({
                          foodname: food.foodname,
                          foodprice: food.initialprice,
                        })
                      );
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    disabled
                    className="newsetquantity"
                    value={food.foodquantity}
                  />
                  <button
                    className="inc"
                    onClick={() => {
                      dispatch(
                        increment({
                          foodname: food.foodname,
                          foodprice: food.initialprice,
                        })
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })
        .filter((food) => food.foodquantity !== 0)}
    </>
  );
};

export default Filledcart;
