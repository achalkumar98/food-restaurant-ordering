import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5541358&lng=84.6664797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      {/* Search & Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <input
            type="text"
            className="px-4 py-2 outline-none w-72 sm:w-96"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants ⭐
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
