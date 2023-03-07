import axiosInstance from "../../../src/axiosInstance";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {deleteitem} from '../../slice/cartdata'
import { useNavigate } from "react-router-dom";
import "../../Pages/Detailedcart.css";

const Proccedcomp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartSlice);
  const { email } = useSelector((state) => state.userSlice);
  const ordernow = async () => {
    const cartItems = {
      email: email,
      itemlist: {
        items: cart.items,
        totalitem: cart.totalitem,
        totalprice: cart.cartprice,
      },
    };
    const res = await axiosInstance.post("/ordernow", cartItems);
    navigate("/app/ordernow");
    dispatch(deleteitem())
  };
  return (
    <>
      <div className="proccedcontainer">
        <div className="ordercontainer">
          <button className="orderbtn" onClick={ordernow}>
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Proccedcomp;
