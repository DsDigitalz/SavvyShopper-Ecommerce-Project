import React from "react";

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm animate-pulse flex flex-col justify-between h-[340px]">
      <div className="w-full h-44 bg-zinc-200 rounded-md mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-zinc-200 rounded w-3/4" />
        <div className="h-3 bg-zinc-200 rounded w-1/2" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-5 bg-zinc-200 rounded w-1/3" />
          <div className="h-4 bg-zinc-200 rounded w-1/4" />
        </div>
      </div>
      <div className="h-9 bg-zinc-200 rounded-md w-full mt-3" />
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="w-full h-[400px] bg-zinc-200 rounded-xl" />
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-20 bg-zinc-200 rounded-lg" />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-8 bg-zinc-200 rounded w-3/4" />
          <div className="h-6 bg-zinc-200 rounded w-1/3" />
          <div className="h-8 bg-zinc-200 rounded w-1/4" />
          <div className="h-20 bg-zinc-200 rounded w-full" />
          <div className="h-12 bg-zinc-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
