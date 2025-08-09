const Shimmer = () => {
  return (
    <div className="p-6 space-y-10 animate-pulse">
      {/* Top banner shimmer */}
      <div className="relative w-full h-52 bg-gray-900 rounded-lg flex flex-col items-center justify-center">
        {/* Glowing circle shimmer for the icon */}
        <div className="w-16 h-16 bg-gray-700 rounded-full animate-pulse-glow mb-4"></div>
        {/* Banner text */}
        <p className="text-gray-300 text-lg font-medium">
          Looking for great food near you ...
        </p>
      </div>

      {/* What's on your mind shimmer */}
      <div>
        <div className="h-6 bg-gray-200 rounded w-48 mb-6"></div>
        <div className="flex space-x-8 overflow-hidden">
          {Array(7)
            .fill("")
            .map((_, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
        </div>
      </div>

      {/* Restaurants shimmer */}
      <div>
        <div className="h-6 bg-gray-200 rounded w-80 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-lg shadow-md space-y-4"
              >
                <div className="h-40 bg-gray-300 rounded-lg"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
