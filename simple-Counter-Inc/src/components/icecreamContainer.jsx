import React from "react";
import { useSelector, useDispatch } from "react-redux";
//
import { buyIcecream } from "../redux/iceCream/iceCreamAction";
export const IceCreamContainer = () => {
  const numOfIcecream = useSelector((state) => state.icecreme.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cake - {numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Cake</button>
    </div>
  );
};
