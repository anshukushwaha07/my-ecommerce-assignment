import React from "react";
import { FaLaptop, FaTshirt, FaCouch, FaHeart, FaFootballBall, FaBook } from "react-icons/fa";

const categories = [
  { name: "Electronics", icon: <FaLaptop /> },
  { name: "Fashion", icon: <FaTshirt /> },
  { name: "Home", icon: <FaCouch /> },
  { name: "Beauty", icon: <FaHeart /> },
  { name: "Sports", icon: <FaFootballBall /> },
  { name: "Books", icon: <FaBook /> },
];

const CategoryBar = ({ onCategoryClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-3 sm:grid-cols-6 gap-4 text-center">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="cursor-pointer flex flex-col items-center text-gray-700 hover:text-blue-600"
          onClick={() => onCategoryClick(cat.name)}
        >
          <div className="text-3xl">{cat.icon}</div>
          <span className="text-sm mt-1">{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
