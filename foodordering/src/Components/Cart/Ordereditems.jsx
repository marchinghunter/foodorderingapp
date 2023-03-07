import React, { useEffect, useState } from "react";
import axiosInstance from "../../../src/axiosInstance";
import "../../Pages/Detailedcart.css";
import Header from "../Header/Header";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Orders from "./Orders";

const Ordereditems = () => {
  let totalPrice = 0;
  const { email } = useSelector((state) => state.userSlice);
  const [items, setItems] = useState("empty");
  const fetchMyOrders = async () => {
    try {
      const fetchOrders = await axiosInstance.post(
        "/fetchordered",
        {email}
      );
      setItems(await fetchOrders.data);
      console.log(await fetchOrders.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyOrders();
  }, [email]);
  return (
    <div className="Detailedcart orders">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <div className="mycart">
          <div className="itemdetails">
            {items !== "empty" ? (
              <>
                <div className="orderheader">
                  <h1 className="orderedheading">Ordered Food</h1>
                </div>
                {items.map((subitems) =>
                  subitems.itemlist.items.map((myitem, key) => {
                    return (
                      <Orders
                        foodname={myitem.foodname}
                        foodquantity={myitem.foodquantity}
                        foodprice={myitem.foodprice}
                      />
                    );
                  })
                )}
              </>
            ) : (
              <div className="emptycartwrapper">
                <h1 className="emptyCart">
                  No orders
                  <RiShoppingCartLine className="cartIcon" />
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordereditems;
