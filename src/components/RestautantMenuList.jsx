/* eslint-disable react/prop-types */
import { MENU_IMG } from "../utils/constants";
import { FaRegCircleDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenuList = ({ items, actionType }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="accordion-body">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="item flex items-start justify-between pb-8 my-2 mx-2 border-b-2 border-gray-200"
        >
          <div className="md:w-auto w-3/5">
            {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <FaRegCircleDot style={{ color: "green" }} />
            ) : (
              <FaRegCircleDot style={{ color: "red" }} />
            )}
            <h4 className="text-base font-poppins">{item?.card?.info?.name}</h4>
            {item?.card?.info?.price ? (
              <span className="rupee font-poppins text-sm">
                {item?.card?.info?.price / 100}
              </span>
            ) : (
              <span className="rupee font-poppins text-sm">
                {item?.card?.info?.defaultPrice / 100}
              </span>
            )}
            {item?.card?.info?.description && (
              <p className="text-gray-500 mt-3  text-md md:w-3/4 font-poppins">
                {item?.card?.info?.description}
              </p>
            )}
          </div>
          <div className="relative w-[118px] h-24">
            {item?.card?.info?.imageId && (
              <button className="cursor-pointer w-[118px] h-24 rounded-md">
                <img
                  src={`${MENU_IMG}${item?.card?.info?.imageId}`}
                  alt="menu-img"
                  className="rounded-md w-[118px] h-24 object-cover"
                />
              </button>
            )}
            <button
              onClick={() => handleAddItem(item)}
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 z-[1] w-24 h-9 shadow-md shadow-color-7 bg-white text-center inline-block rounded ${
                actionType === "remove" ? "text-red-600" : "text-green-600"
              } text-sm font-ProximaNovaSemiBold uppercase`}
            >
              {actionType === "add" ? "Add" : "Remove"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
