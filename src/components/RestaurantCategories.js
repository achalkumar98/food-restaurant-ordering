import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex, index }) => {
  const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-4 mb-4 transition-all">
        {/* Accordion Header */}
        <div
          className="flex justify-between items-center cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-2xl text-gray-600">
            {showItems ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </div>

        {/* Animated Expandable Section */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showItems ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 border-t border-gray-300 pt-3">
            {showItems && <ItemList items={data.itemCards} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategories;
