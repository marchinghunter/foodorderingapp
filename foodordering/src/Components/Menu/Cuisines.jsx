import React, { useEffect } from "react";
import '../../Pages/Cuisines.css'
import { NavLink } from "react-router-dom";
import { getItem } from "../../slice/itemdata";
import { useSelector,useDispatch } from "react-redux";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cuisines = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getItem())
  },[dispatch]);
  
  return (
    <div className="menu">
      <h1 className="cuisineheading">Cuisines🍝</h1>
      <div className="navbar">
        <ul className="cuisinemenu">
          <li className="cuisinename">
            <NavLink to='/app/cuisine/indian' >Indian</NavLink>
          </li>
          <li className="cuisinename">
            <NavLink to='/app/cuisine/chinese'>Chinese</NavLink>
          </li>
          <li className="cuisinename">
            <NavLink to='/app/cuisine/italian'>Italian</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cuisines;
