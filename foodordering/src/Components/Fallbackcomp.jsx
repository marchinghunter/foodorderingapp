import React from "react";
import Style from '../Pages/Fallback.module.css'

const Fallbackcomp = () => {
  return (
    <>
    <div className={Style.container}>
      <h1 class="title">Loading</h1>
      <div class="rainbow-marker-loader"></div>
      </div>
    </>
  );
};

export default Fallbackcomp;
