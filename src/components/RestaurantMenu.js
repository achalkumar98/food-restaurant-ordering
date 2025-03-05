import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <header className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        {/* Left - Restaurant Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img
            className="w-full h-48 md:h-56 object-cover rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurant"
          />
        </div>

        {/* Right - Restaurant Details */}
        <div className="w-full md:w-2/3 md:pl-6 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <h3 className="text-gray-600 text-sm mt-1">
            {cuisines?.join(", ") || "No cuisines available"}
          </h3>

          <div className="flex justify-center md:justify-start items-center mt-4 space-x-4 text-gray-600">
            <div className="flex items-center bg-green-100 px-3 py-1 rounded-lg">
              <AiOutlineStar className="text-yellow-500" />
              <span className="ml-1">{resInfo?.avgRating || "N/A"} stars</span>
            </div>

            <div className="flex items-center bg-blue-100 px-3 py-1 rounded-lg">
              <FiClock className="text-blue-600" />
              <span className="ml-1">30-40 min</span>
            </div>

            <div className="bg-gray-100 px-3 py-1 rounded-lg">{costForTwoMessage}</div>
          </div>
        </div>
      </header>

      {/* Menu Items */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Menu ({itemCards?.length || 0} items)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {itemCards?.map((item) => (
            <div
              key={item.card.info.id}
              className="flex items-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
            >
              {/* Left - Item Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.card.info.name}
                </h2>
                <h3 className="text-green-600 font-medium">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.card.info.description || "No description available"}
                </p>
              </div>

              {/* Right - Item Image */}
              {item.card.info.imageId && (
                <div className="w-24 h-24">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
