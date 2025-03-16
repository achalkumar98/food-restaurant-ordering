import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";

const RestroCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const deliveryTime = resData?.info?.sla?.deliveryTime;

  return (
    <div
      data-testid="resCard"
      className="p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg truncate">{name}</h3>

      <h4 className="text-gray-600 text-sm">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h4>

      <h4 className="flex items-center text-yellow-500 font-medium">
        <AiOutlineStar className="mr-1" />
        {avgRating}
      </h4>

      <h4 className="text-gray-700">💰 {costForTwo}</h4>

      <h4 className="flex items-center text-gray-500">
        <FiClock className="mr-1" />
        {deliveryTime} min
      </h4>
    </div>
  );
};

export default RestroCard;
