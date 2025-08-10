import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import ShimmerMenu from "./ShimmerMenu";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (loading) return <ShimmerMenu />;
  if (error) return <div className="text-center text-red-600 mt-10">Error: {error}</div>;
  if (!resInfo) return null; // fallback if no data

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const slaString = sla?.slaString || "";

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      {/* Restaurant Info Header */}
      <header className="mb-8 border-b border-gray-300 pb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 truncate">{name}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-4 text-gray-700 font-semibold text-base sm:text-lg">
            <AiOutlineStar className="text-green-600 text-xl sm:text-2xl" />
            <span>
              {avgRating} <span className="text-gray-500">({totalRatingsString})</span>
            </span>
          </div>
          <div className="text-red-600 font-semibold text-base sm:text-lg">{costForTwoMessage}</div>
          <div className="flex items-center gap-2 text-gray-700 font-semibold text-base sm:text-lg">
            <FiClock className="text-xl sm:text-2xl" />
            <span>{slaString}</span>
          </div>
        </div>
        <p className="mt-4 text-center sm:text-left text-red-500 font-semibold text-sm sm:text-base tracking-wide">
          {cuisines?.join(", ")}
        </p>
      </header>

      {/* Categories Accordion */}
      <section className="space-y-6">
        {categories.map((category, index) => (
          <RestaurantCategories
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={showIndex === index}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))}
      </section>
    </main>
  );
};

export default RestaurantMenu;
