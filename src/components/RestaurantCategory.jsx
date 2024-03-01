/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import RestaurantMenuList from "./RestautantMenuList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <>
      {/* Accordion Header */}
      <div
        className="flex items-center justify-between py-5 px-3 sm:p-6 shadow-md cursor-pointer text-left my-2"
        onClick={handleClick}
      >
        <h2 className="sm:text-lg font-semibold">
          {data?.title} ({data?.itemCards?.length})
        </h2>
        <div className="text-xl text-color-9">
          {showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {/* Accordion Body */}
      {showItems && <RestaurantMenuList items={data?.itemCards} />}
    </>
  );
};

export default RestaurantCategory;
