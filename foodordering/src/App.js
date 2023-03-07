import "./App.css";
import React, { useEffect, lazy } from "react";
import axiosInstance from "./axiosInstance";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./slice/userdata";
import { Routes, Route, useNavigate } from "react-router-dom";
import Indian from "./Components/Menu/foodcountry/Indian";
import Chinese from "./Components/Menu/foodcountry/Chinese";
import Italian from "./Components/Menu/foodcountry/Italian";
import Detailedcart from "./Components/Cart/Detailedcart";
import Login from "./Components/Authpages/Login";
import Signup from "./Components/Authpages/Signup";
import Fallbackcomp from "./Components/Fallbackcomp";
import Protectedroutestosignup from "./Components/Authpages/Protectedroutestosignup";
import Protectedroutestoapp from "./Components/Authpages/Protectedroutestoapp";
import Ordereditems from "./Components/Cart/Ordereditems";
import Itemsordered from "./Components/Cart/Itemsordered";
const Combinedcomp = lazy(() =>
  import("./Components/Combinedcomponent/Combinedcomp")
);

function App() {
  const checkuser = async ()=>{
    await axiosInstance
      .get("/checkuser")
      .then((res) => dispatch(setUser(res.data)))
      .catch((error) => {});
  }
  const { isLoggedIn,isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    checkuser()
  }, [isLoggedIn]);

  if(isLoading===true){
    return <Fallbackcomp/>
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Protectedroutestoapp Component={Signup} />}
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<Fallbackcomp />}>
              <Protectedroutestoapp Component={Signup} />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<Fallbackcomp />}>
              <Protectedroutestoapp Component={Login} />
            </React.Suspense>
          }
        />
        <Route
          exact
          path="/app"
          element={
            <React.Suspense fallback={<Fallbackcomp />}>
              <Protectedroutestosignup Component={Combinedcomp} />
            </React.Suspense>
          }
        >
          <Route index element={<Indian />} />
          <Route path="/app/cuisine/indian" element={<Indian />} />
          <Route path="*" element={<Indian />} />
          <Route path="/app/cuisine/chinese" element={<Chinese />} />
          <Route path="/app/cuisine/italian" element={<Italian />} />
        </Route>
        <Route
          path="/app/cart"
          element={<Protectedroutestosignup Component={Detailedcart} />}
        />
        <Route
          path="*"
          element={<Protectedroutestosignup Component={Signup} />}
        />
        <Route
          path="/app/orders"
          element={<Protectedroutestosignup Component={Ordereditems} />}
        />
        <Route
          path="/app/ordernow"
          element={<Protectedroutestosignup Component={Itemsordered} />}
        />
      </Routes>
    </div>
  );
}

export default App;
