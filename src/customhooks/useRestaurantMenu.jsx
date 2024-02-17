/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { CORSPROXY } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [ResInfo, setResInfo] = useState({});
    const [ResMenuInfo, setResMenuInfo] = useState([]);
    useEffect(() => {
        fetchRestaurantMenu();
    }, [])

    const fetchRestaurantMenu = async () => {
        try {
            const url = CORSPROXY + encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.32351&lng=85.8172637&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
            const response = await fetch(url);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                const RestaurantType = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                console.log("This is the response json",json?.data?.cards?.find((x) => x?.groupedCard).groupedCard?.cardGroupMap?.REGULAR?.cards);
                const RestaurantMenuData = json?.data?.cards?.find((x) => x?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card?.card["@type"] === RestaurantType);
                console.log("This is RestaurantMenuData",RestaurantMenuData);
                const Resinfo = json?.data?.cards.find(x => (x?.card?.card?.info))?.card?.card?.info
                setResInfo(Resinfo);
                setResMenuInfo(RestaurantMenuData);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return [ResInfo, setResInfo, ResMenuInfo, setResMenuInfo];
}

export default useRestaurantMenu;