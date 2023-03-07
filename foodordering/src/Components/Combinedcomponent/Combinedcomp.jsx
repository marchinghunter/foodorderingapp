import React from "react";
import "../../Pages/Combinedcomponent.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Middledescription from "../Middledescription/Middledescription";
import Descriptionbox from "../Descriptionbox/Descriptionbox.jsx";
import Cuisines from "../Menu/Cuisines";
import Detailedcart from "../Cart/Detailedcart";

const Combinedcomp = () => {
  return (
    <div className="combinedcomp" style={{backgroundColor:'white'}}>
      <div className="firstrow">
        <Header />
      </div>
      <div className="secondrow">
        <Middledescription />
        <Descriptionbox />
      </div>
      <div className="thirdrow">
        <Cuisines />
        <div className="fooditemmenu">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Combinedcomp;
