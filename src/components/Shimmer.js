const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Rated Shimmer */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 px-6 py-4 rounded-lg shadow-md mb-6 animate-pulse">
        <div className="h-6 w-48 bg-gray-300 rounded"></div>
        <div className="h-10 w-40 bg-gray-300 rounded"></div>
      </div>

      {/* Shimmer Cards */}
      <div className="flex flex-wrap gap-6">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-72 h-80 bg-gray-200 rounded-lg shadow-lg animate-pulse"
            >
              <div className="h-40 bg-gray-300 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-5 w-44 bg-gray-300 mb-2 rounded"></div>
                <div className="h-4 w-32 bg-gray-300 mb-2 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
