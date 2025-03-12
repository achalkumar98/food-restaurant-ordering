const ShimmerMenu = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 animate-pulse">
        {/* Restaurant Details Shimmer */}
        <div className="py-6 border-b">
          <div className="h-8 w-2/3 bg-gray-300 rounded"></div>
        </div>
  
        {/* Info Box Shimmer */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
            <div className="h-6 w-28 bg-gray-300 rounded"></div>
          </div>
          <div className="mt-2 h-5 w-1/2 bg-gray-300 rounded"></div>
        </div>
  
        {/* Menu Categories Shimmer */}
        <div className="mt-6">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-4 mb-4"
              >
                <div className="h-6 w-1/3 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerMenu;
  