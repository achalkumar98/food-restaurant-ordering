import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useOutletContext } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { searchText } = useOutletContext();
  const [showTopRated, setShowTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let updatedList = listOfRestaurant;

    // Apply search filter
    if (searchText) {
      updatedList = updatedList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Apply Top Rated filter if enabled
    if (showTopRated) {
      updatedList = updatedList.filter((res) => res.info.avgRating > 4);
    }

    setFilteredRestaurant(updatedList);
  }, [searchText, showTopRated, listOfRestaurant]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-xl font-semibold mt-10">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-6">
      {/* Top Rated Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 px-6 py-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          ⭐ Top Rated Restaurants
        </h2>
        <button
          className={`px-6 py-2 font-semibold rounded-lg shadow-md transition ${
            showTopRated ? "bg-red-500 text-white hover:bg-red-600" : "bg-green-500 text-white hover:bg-green-600"
          }`}
          onClick={() => setShowTopRated(!showTopRated)}
        >
          {showTopRated ? "Show All Restaurants" : "Filter Top Rated"}
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
              <RestroCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
