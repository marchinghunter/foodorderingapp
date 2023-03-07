import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../slice/userdata";
import { createUserData } from "../../slice/userdata";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const {emailerror,apierror} = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const enterUserData = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const emailExist=()=>{
    toast.error('Email already exists', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      dispatch(reset())
  }
  const someErr=()=>{
    toast.error('There is some error', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      dispatch(reset())
  }
  {emailerror===true&&emailExist()}
  {apierror===true&&someErr()}

  return (
    <div>
        <ToastContainer
        />
      <div className="everythingwrapper">
        <div className="titlewrapper">
          <h1 className="authtitle">React Meals</h1>
          <h2 className="authtitledesc">Get your delicious food Instantly</h2>
        </div>
        <div className="loginboxwrapper">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={enterUserData}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={enterUserData}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={enterUserData}
          />
          <button
            type="submit"
            className="authbtn"
            onClick={() => {
              dispatch(createUserData(userData));              
            }}
          >
            Sign Up
          </button>
          <Link to="/login">
            <button className="authbtn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
