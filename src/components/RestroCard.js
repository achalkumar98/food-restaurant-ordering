import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestroCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating,
    costForTwo,
  } = resData?.info || {};

  const deliveryTime = resData?.info?.sla?.deliveryTime || "Unknown";

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md"
    >
      {/* Restaurant Image */}
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Restaurant Name */}
      <h3 className="font-bold py-2 text-lg truncate">{name}</h3>

      {/* Cuisines */}
      <h4 className="text-gray-600 text-sm">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h4>

      {/* Average Rating */}
      <h4 className="flex items-center text-yellow-500 font-medium">
        <AiOutlineStar className="mr-1" />
        {avgRating ? `${avgRating} stars` : "N/A"}
      </h4>

      {/* Cost for Two */}
      <h4 className="text-gray-700">
        💰 {costForTwo ? costForTwo : "Price not available"}
      </h4>

      {/* Delivery Time */}
      <h4 className="flex items-center text-gray-500">
        <FiClock className="mr-1" />
        {deliveryTime} min
      </h4>
    </div>
  );
};

// Higher Order Component for Promoted Label
export const withPromtedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute bg-black text-white m-2 p-1 px-2 rounded-lg text-xs">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestroCard;
