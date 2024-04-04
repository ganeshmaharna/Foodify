/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RestaurantMenuList from "./RestautantMenuList";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="pt-20 m-auto lg:w-1/2 md:w-3/4 w-full flex flex-col items-center">
      <button
        onClick={handleClearCart}
        className="p-2 m-2 text-white bg-black text-md font-semibold rounded-lg"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h1>Your Cart is Empty</h1>
      ) : (
        <RestaurantMenuList items={cartItems} actionType="remove"/>
      )}
    </div>
  );
};

export default Cart;
