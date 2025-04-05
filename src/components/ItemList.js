import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handelAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-full max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;

        return (
          <div
            key={id}
            className="p-4 border-b border-gray-300 flex flex-col md:flex-row justify-between items-center bg-white"
          >
            {/* Left Section - Item Details */}
            <div className="flex-1 w-full md:w-3/5">
              <h2 className="font-semibold text-lg break-words">{name}</h2>
              <p className="text-md font-semibold text-gray-700">
                ₹{price ? price / 100 : defaultPrice / 100}
              </p>
              <p className="text-sm text-gray-500 mt-1 break-words">
                {description}
              </p>
            </div>

            {/* Right Section - Image & Button */}
            <div className="w-full md:w-2/5 flex flex-col items-center mt-3 md:mt-0">
              {imageId && (
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-28 h-28 object-cover rounded-lg shadow-sm"
                />
              )}
              <button
                className="mt-2 px-4 py-1 text-green-600 border border-green-600 rounded-lg text-sm font-semibold hover:bg-green-600 hover:text-white transition-all"
                onClick={() => handelAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
