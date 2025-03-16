import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1938475&lng=81.3509416&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1 className="text-center text-red-500 text-xl">Looks like you're offline! Please check your internet connection.</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
            onClick={() => {
              const filtered = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info.id} to={`/restaurants/${restaurant?.info.id}`} className="block">
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
