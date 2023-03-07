import React, { useState } from "react";
import Cart from "./Cart";
import "../../Pages/Header.css";
import { logout } from "../../slice/userdata";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.userSlice);
  const [dropdownbtn, setDropdownbtn] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="headerContainer">
      <div className="pagetitle">
        <Link to="/app" className="titlelink">
          <h1 className="title">React Meals</h1>
        </Link>
      </div>
      <div className="usernametitle">
        <button
          value="logout"
          className="userbtn "
          onClick={() => {
            setDropdownbtn(!dropdownbtn);
          }}
        >
          {name}
        </button>
        {dropdownbtn && (
          <button type="button" className="myorder" onClick={() => navigate("/app/orders")}>
            Orders
          </button>
        )}
        {dropdownbtn && (
          <button
            value="logout"
            className="logout "
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </button>
        )}
      </div>
      <div className="cartTitle">
        <Cart />
      </div>
    </div>
  );
};

export default Header;
