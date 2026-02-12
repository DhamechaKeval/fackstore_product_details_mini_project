import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 flex items-center justify-center">
      <div className="w-80 bg-gray-900 p-6 rounded-xl animate-pulse">
        {/* Image skeleton */}
        <div className="h-48 bg-gray-800 rounded-lg"></div>

        {/* Title */}
        <div className="h-5 bg-gray-800 rounded mt-4"></div>

        {/* Category */}
        <div className="h-4 bg-gray-800 rounded mt-2 w-1/2 mx-auto"></div>

        {/* Description lines */}
        <div className="space-y-2 mt-4">
          <div className="h-3 bg-gray-800 rounded"></div>
          <div className="h-3 bg-gray-800 rounded w-5/6"></div>
          <div className="h-3 bg-gray-800 rounded w-4/6"></div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <div className="h-4 bg-gray-800 rounded w-12"></div>
          <div className="h-4 bg-gray-800 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
