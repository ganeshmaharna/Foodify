/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../customhooks/useRestaurantMenu";
import { IoIosStar,IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [ResInfo, setResInfo, ResMenuInfo, setResMenuInfo] =
    useRestaurantMenu(resId);
  const { name, city, cuisines, avgRating, totalRatingsString, isOpen } =
    ResInfo;

  return (
    <div className="2xl:w-6/12 mx-auto menu-container pt-28 pb-36 md:w-10/12 w-full px-3 min-h-screen">
      {/* BreadCrumb */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Restaurants
              </a>
            </div>
          </li>
        </ol>
      </nav>
      {/* Restaurant Name */}
      <div className="flex items-start justify-between pt-5 mb-6">
        <div>
          <h2 className="text-customcolor-6 sm:text-xl capitalize mb-1 font-ProximaNovaSemiBold">
            {name}
          </h2>
          <p className="text-customcolor-5 text-sm font-ProximaNovaThin">
            {cuisines?.join(", ")}
          </p>
          <p className="text-customcolor-5 text-sm font-ProximaNovaThin">
            {city}
          </p>
        </div>
        {avgRating && (
          <div>
            <button className="p-[8px] cursor-pointer rounded resRating">
              <div className="flex items-center gap-1 justify-center avgRating pb-[10px] mb-[8px]">
                <IoIosStar style={{ color: "green" }} />
                <span className="font-ProximaNovaSemiBold text-sm">
                  {avgRating}
                </span>
              </div>
              <span className="font-ProximaNovaSemiBold tracking-tight text-xs totalRatings">
                {totalRatingsString}
              </span>
            </button>
          </div>
        )}
      </div>
      {/* Description Data */}
      <>
        <div className="dottedDivider"></div>
        {/* Restaurant Category */}
        <ul>
          {ResMenuInfo?.map((category, index) => (
            <li key={category?.card?.card?.title}>
              <div className="flex items-center justify-between cursor-pointer py-5 px-3 sm:p-6 shadow-md text-left">
                <h2 className="text-customblack-3 sm:text-lg font-ProximaNovaBold">
                  {category?.card?.card?.title} (
                  {category?.card?.card?.itemCards?.length})
                </h2>
                <div className="text-xl text-customblack-3">
                  {<IoIosArrowDown/>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default RestaurantMenu;