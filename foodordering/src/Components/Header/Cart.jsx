import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShoppingCartFill } from "react-icons/ri";

const Cart = () => {
  const  cart  = useSelector(state => state.cartSlice);
  return (
    <div>
      <NavLink to="/app/cart">
        <button className="btn">
          <RiShoppingCartFill /><span className="cartno">{cart.totalitem}</span> <span className="cartname">Cart</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Cart;
