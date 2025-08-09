import { CDN_URL } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";

const RestroCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="w-[260px] cursor-pointer hover:scale-95 transition-transform duration-300"
    >
      {/* Image Container */}
      <div className="relative">
        <img
          className="w-full h-44 object-cover rounded-2xl"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />

        {/* Offer Overlay */}
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl px-3 py-2">
            <p className="text-white font-bold text-lg uppercase">
              {aggregatedDiscountInfoV3.header}{" "}
              {aggregatedDiscountInfoV3.subHeader &&
                ` ${aggregatedDiscountInfoV3.subHeader}`}
            </p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-3">
        {/* Name */}
        <h3 className="font-bold text-lg text-gray-900 truncate">{name}</h3>

        {/* Rating & Delivery */}
        <div className="flex items-center text-sm text-gray-700 font-medium mt-1">
          <AiFillStar className="text-green-600 mr-1" />
          <span>{avgRating || "N/A"}</span>
          <span className="mx-2">•</span>
          <span>{sla?.slaString || `${sla?.deliveryTime} mins`}</span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 text-sm truncate">
          {cuisines?.join(", ")}
        </p>

        {/* Area Name */}
        <p className="text-gray-500 text-sm">{areaName}</p>
      </div>
    </div>
  );
};

export default RestroCard;
