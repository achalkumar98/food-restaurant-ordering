import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [whatsOnYourMind, setWhatsOnYourMind] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

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
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info ||
        [];

      const restData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setWhatsOnYourMind(mindData);
      setRestaurants(restData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-20 text-2xl font-bold">
        Looks like you're offline. Please check your internet connection.
      </h1>
    );
  }

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* What's on your mind */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold py-6">What's on your mind?</h2>

          {/* Arrows on the right */}
          <div className="flex space-x-2">
            <button
              onClick={() => {
                document
                  .getElementById("mind-scroll")
                  .scrollBy({ left: -200, behavior: "smooth" });
              }}
              className="text-lg font-bold bg-slate-100 p-2 hover:bg-slate-200"
            >
              ←
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("mind-scroll")
                  .scrollBy({ left: 200, behavior: "smooth" });
              }}
              className="text-lg font-bold bg-slate-100 p-2 hover:bg-slate-200"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            id="mind-scroll"
            className="flex space-x-10 overflow-x-auto hide-scrollbar scroll-smooth"
          >
            {whatsOnYourMind.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={`https://media-assets.swiggy.com/${item.imageId}`}
                  alt={item.accessibility?.altText || "item"}
                  className="w-32 h-fit object-cover rounded-full hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top restaurants */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Restaurants with online food delivery in Bhilai
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`} // plural "restaurants"
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
