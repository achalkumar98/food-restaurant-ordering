import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import RestroCard from "./RestroCard";

const Search = () => {
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch restaurants data on component mount
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1652557&lng=81.3955404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await res.json();

        // Adjust based on actual data shape, similar to Body.js
        const restData =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setRestaurants(restData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (!query) {
      setFilteredResults([]);
      return;
    }

    const filtered = restaurants.filter((restaurant) => {
      const name = restaurant?.info?.name?.toLowerCase() || "";
      const cuisines = restaurant?.info?.cuisines?.join(" ").toLowerCase() || "";

      return (
        name.includes(query.toLowerCase()) ||
        cuisines.includes(query.toLowerCase())
      );
    });

    setFilteredResults(filtered);
  }, [query, restaurants]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search for restaurants or dishes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 focus:outline-none"
        />
        <button
          onClick={() => {}}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 flex items-center gap-2 cursor-default"
          disabled
        >
          <SearchIcon size={18} /> Search
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {query && filteredResults.length > 0 ? (
          filteredResults.map((restaurant) => (
            <RestroCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : query ? (
          <p className="text-gray-500 mt-4">
            No results found for "{query}"
          </p>
        ) : (
          <p className="text-gray-500 mt-4">
            Start typing to search restaurants or dishes
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
