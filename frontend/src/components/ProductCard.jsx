import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  // Safely parse and limit rating to a maximum of 5 stars
  const rawRating = Number(product?.rating);
  const safeRating =
    Number.isFinite(rawRating) && rawRating > 0
      ? Math.min(Math.floor(rawRating), 5)
      : 0;

  return (
    <div className="bg-white rounded-lg p-3 shadow hover:shadow-xl transition-all duration-300 group relative">

      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        {product?.discount || "20% OFF"}
      </span>

      <div className="h-40 w-full overflow-hidden rounded">
        <img
          src={product?.image || "https://placehold.co/300x300"}
          alt={product?.name}
          className="w-full h-full object-cover group-hover:scale-110 transition"
          onError={(e) => (e.target.src = "https://placehold.co/300x300")}
        />
      </div>

      <h3 className="mt-2 font-semibold truncate">{product?.name}</h3>
      <p className="text-gray-500 text-sm capitalize">{product?.category}</p>

      <div className="flex items-center gap-1 text-yellow-400 mt-1">
        {[...Array(safeRating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="mt-2 font-bold text-lg">₹{product?.price}</p>

      <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded opacity-0 group-hover:opacity-100 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
