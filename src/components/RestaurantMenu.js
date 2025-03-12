import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import ShimmerMenu from "./ShimmerMenu";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.cards[2]?.card?.card?.info?.sla || {};

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Restaurant Details */}
      <div className="py-6 border-b">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
      </div>

      {/* Info Box */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Ratings */}
          <div className="flex items-center gap-2 text-lg font-semibold">
            <AiOutlineStar className="text-green-600" /> {avgRating} (
            {totalRatingsString})
          </div>
          {/* Cost */}
          <span className="text-lg font-semibold">{costForTwoMessage}</span>
          {/* SLA */}
          <div className="flex items-center text-lg font-semibold">
            <FiClock className="mr-1" /> {slaString}
          </div>
        </div>

        {/* Cuisines - Aligned Below */}
        <div className="mt-2 text-center md:text-left font-semibold text-red-500">
          {cuisines.join(", ")}
        </div>
      </div>

      {/* Restaurant Menu Categories (Accordion) */}
      <div className="mt-6">
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={setShowIndex} // Pass function reference
            index={index} // Pass current index
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
