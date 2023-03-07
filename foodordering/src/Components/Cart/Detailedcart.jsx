import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../Pages/Detailedcart.css";
import Filledcart from "./Filledcart";
import Header from "../Header/Header";
import Proccedcomp from "./Proccedcomp";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

function Detailedcard() {
  const cartData = useSelector((state) => state.cartSlice);
  return (
    <div className="Detailedcart">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <div className="mycart">
          <div className="itemdetails">
            {cartData.totalitem > 0 ? (
              <Filledcart/>
            ) : (
              <div className="emptycartwrapper">
              <h1 className="emptyCart">
                Empty Cart
                <RiShoppingCartLine className="cartIcon" />
              </h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>{cartData.totalitem>=1&&<Proccedcomp/>}</footer>
      
    </div>
  );
}
export default Detailedcard;
