import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../Pages/authpage.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkUser,reset } from "../../slice/userdata";

const Login = () => {
  const { emailerror, wrongpassword } = useSelector(
    (state) => state.userSlice
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const enterUserData = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = (event) => {
    dispatch(checkUser(userData));
  };
  const noUserError=()=>{
    toast.error('There is no User', {
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
  const wrongPassword=()=>{
    toast.error('Wrong Password', {
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
  {emailerror===true&&noUserError()}
  {wrongpassword===true&&wrongPassword()}

  return (
    <div>
      <ToastContainer/>
      <div className="everythingwrapper">
        <div className="titlewrapper">
          <h1 className="authtitle">React Meals</h1>
          <h2 className="authtitledesc">Get your delicious food Instantly</h2>
        </div>

        <div className="loginboxwrapper">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={userData.email}
            onChange={enterUserData}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={userData.password}
            onChange={enterUserData}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitHandler();
              }
            }}
          />
          <button type="submit" className="authbtn" onClick={submitHandler}>
            Login
          </button>

          <Link to="/signup">
            <button className="authbtn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
