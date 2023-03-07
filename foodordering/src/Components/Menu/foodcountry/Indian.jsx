import React from "react";
import { useSelector } from "react-redux";
import Fooditem from '../Fooditem';

const Indian = () => {
  const itemData = useSelector((state) => state.itemSlice.item);
  const foodData = itemData.filter(cateogarizeData);
  function cateogarizeData(foodData) {
    return foodData.cateogary === "Indian";
  }
  // console.log(foodData);
  return (
    <>
      {foodData.map((foodData) => {
        return (
        <Fooditem
          key={foodData.id}
          foodimg={foodData.img}
          foodname={foodData.name}
          foodprice={foodData.price}
        />
        )
      })}
    </>
  );
};

export default Indian;
