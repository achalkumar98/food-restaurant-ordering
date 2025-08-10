import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);
  const [topChains, setTopChains] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState(null);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1652557&lng=81.3955404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();

      const mindData =
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

      const chainsData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const restData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setWhatsOnYourMind(mindData);
      setTopChains(chainsData);
      setRestaurants(restData);
      setAllRestaurants(restData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };

  const applyFilter = (filter) => {
    setActiveFilter(filter);

    let filteredList = allRestaurants;

    switch (filter) {
      case "Fast Delivery":
        filteredList = allRestaurants.filter(
          (res) => res.info.sla.deliveryTime <= 30
        );
        break;

      case "Ratings 4.0+":
        filteredList = allRestaurants.filter(
          (res) => parseFloat(res.info.avgRating) >= 4.0
        );
        break;

      case "Pure Veg":
        filteredList = allRestaurants.filter((res) => res.info.veg === true);
        break;

      case "Offers":
        filteredList = allRestaurants.filter(
          (res) => res.info.aggregatedDiscountInfoV3
        );
        break;

      case "Rs. 300-Rs. 600":
        filteredList = allRestaurants.filter(
          (res) =>
            res.info.costForTwo &&
            parseInt(res.info.costForTwo.replace(/\D/g, "")) >= 300 &&
            parseInt(res.info.costForTwo.replace(/\D/g, "")) <= 600
        );
        break;

      case "Less than Rs. 300":
        filteredList = allRestaurants.filter(
          (res) =>
            res.info.costForTwo &&
            parseInt(res.info.costForTwo.replace(/\D/g, "")) < 300
        );
        break;

      default:
        filteredList = allRestaurants;
    }

    setRestaurants(filteredList);
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-20 text-2xl font-bold px-4">
        Looks like you're offline. Please check your internet connection.
      </h1>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4">
      {/* What's on your mind */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <h2 className="text-xl sm:text-2xl font-bold py-4 sm:py-6">
            What's on your mind?
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                document
                  .getElementById("mind-scroll")
                  .scrollBy({ left: -200, behavior: "smooth" });
              }}
              className="text-lg rounded-full font-bold bg-slate-100 p-2 hover:bg-slate-200"
            >
              ←
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("mind-scroll")
                  .scrollBy({ left: 200, behavior: "smooth" });
              }}
              className="text-lg rounded-full font-bold bg-slate-100 p-2 hover:bg-slate-200"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            id="mind-scroll"
            className="flex space-x-6 sm:space-x-10 overflow-x-auto hide-scrollbar scroll-smooth"
          >
            {whatsOnYourMind.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={`https://media-assets.swiggy.com/${item.imageId}`}
                  alt={item.accessibility?.altText || "item"}
                  className="w-24 sm:w-32 h-fit object-cover rounded-full hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top restaurant chains in Bhilai */}
      {topChains.length > 0 && (
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              Top restaurant chains in Bhilai
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  document.getElementById("top-chains-scroll")
                    .scrollBy({ left: -200, behavior: "smooth" })
                }
                className="text-lg rounded-full font-bold bg-slate-100 p-2 hover:bg-slate-200"
              >
                ←
              </button>
              <button
                onClick={() =>
                  document.getElementById("top-chains-scroll")
                    .scrollBy({ left: 200, behavior: "smooth" })
                }
                className="text-lg rounded-full font-bold bg-slate-100 p-2 hover:bg-slate-200"
              >
                →
              </button>
            </div>
          </div>
          <div className="relative">
            <div
              id="top-chains-scroll"
              className="flex space-x-4 sm:space-x-6 overflow-x-auto hide-scrollbar scroll-smooth"
            >
              {topChains.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={`/restaurants/${restaurant.info.id}`}
                  className="flex-shrink-0"
                >
                  <RestroCard resData={restaurant} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Restaurants with filters */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Restaurants with online food delivery in Bhilai
        </h2>

        {/* Filter bar */}
        <div className="flex space-x-3 overflow-x-auto pb-4 hide-scrollbar">
          {[
            "Filter",
            "Sort By",
            "Fast Delivery",
            "Ratings 4.0+",
            "Pure Veg",
            "Offers",
            "Rs. 300-Rs. 600",
            "Less than Rs. 300",
          ].map((filter, idx) => (
            <button
              key={idx}
              onClick={() => applyFilter(filter)}
              className={`px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200
                ${
                  activeFilter === filter
                    ? "bg-slate-200 text-black border-slate-200 shadow-md"
                    : "bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md hover:bg-gray-50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Restaurant cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestroCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
