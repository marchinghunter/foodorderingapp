import React from "react";
import { Link } from "react-router-dom";
import "../../Pages/Detailedcart.css";
import Header from "../Header/Header";
import { IoFastFoodOutline } from "react-icons/io5";

function Itemsordered() {
  return (
    <div className="Detailedcart">
      <div className="div1">
        <Header />
      </div>
      <div className="div2">
        <div className="mycart">
          <div className="itemdetails">
            <div className="emptycartwrapper">
              <h1 className="emptyCart">
                Your Items have been Ordered✅
                <IoFastFoodOutline className="cartIcon" />
                <span>
                  Go to Your&nbsp;
                  <Link to="/app/orders" className="orderlink">
                    Orders
                  </Link>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Itemsordered;
