import React, { useState } from "react";
import { add } from "../../slice/cartdata";
import "../../Pages/Cuisines.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector,useDispatch } from "react-redux";
import {MdOutlineAddShoppingCart} from "react-icons/md";

const Fooditem = (props) => {

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartSlice);
  const addtoCart =()=>{
    dispatch(add({
      foodname:props.foodname,
      foodprice:props.foodprice,
      foodquantity:1,
      initialprice:props.foodprice
    }));
    toast.success('Added to Cart ✅', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    console.log(`Props:${props.foodname}`)
  }
  return (
    <>
    <ToastContainer/>
      <div className="food">
        <img src={props.foodimg} alt="fooditem" className="foodimg" />
        <div className="fooddescription">
          <h2 className="foodname">{props.foodname}</h2>
          <h2 className="foodprice">${props.foodprice}</h2>
        </div>
        <button className="addtoCartbtn" onClick={addtoCart}>
          <MdOutlineAddShoppingCart className="addtoCarticon"/>
        </button>
      </div>
    </>
  );
};
export default Fooditem;
