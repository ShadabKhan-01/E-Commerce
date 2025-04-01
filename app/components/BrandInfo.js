"use client";

const BrandInfo = ({ name, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 bg-gray-100 rounded-lg shadow-md">
      {/* Brand Name */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>

      {/* Description */}
      <p className="text-lg text-gray-600 max-w-xl px-4">{description}</p>
    </div>
  );
};

export default BrandInfo;
