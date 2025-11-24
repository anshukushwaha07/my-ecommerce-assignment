import React, { useState } from "react";
import { FaStar, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebar = ({
  categories,
  tempCategory,
  setTempCategory,
  tempPrice,
  setTempPrice,
  tempRating,
  setTempRating,
  applyFilters,
  clearFilters,
  isOpen,
  toggleSidebar,
}) => {
  // Accordion sections state
  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  return (
    <>
      {/* MOBILE OVERLAY with blur */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white shadow-2xl
          transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:static md:translate-x-0 md:w-64 md:shadow-none 
          md:border-r md:border-gray-200 md:h-[calc(100vh-5rem)] 
          md:sticky md:top-20 md:z-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* CONTENT SCROLL AREA */}
          <div className="p-5 pb-3 flex-1 overflow-y-auto">

            {/* Mobile header */}
            <div className="md:hidden mb-4 flex justify-between items-center">
              <h2 className="font-bold text-lg">Filters</h2>
              <button
                onClick={toggleSidebar}
                className="text-gray-600 p-1 hover:bg-gray-100 rounded"
              >
                <FaTimes size={22} />
              </button>
            </div>

            {/* CATEGORY */}
            <div className="mb-6 border-b pb-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenCategory(!openCategory)}
              >
                <h4 className="text-gray-600 text-sm font-semibold uppercase">
                  Category
                </h4>
                {openCategory ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {openCategory && (
                <ul className="mt-3 space-y-2 text-sm">
                  <li
                    onClick={() => setTempCategory("All")}
                    className={`cursor-pointer hover:text-blue-600 ${
                      tempCategory === "All"
                        ? "text-blue-600 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    All
                  </li>

                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => setTempCategory(cat)}
                      className={`cursor-pointer hover:text-blue-600 ${
                        tempCategory === cat
                          ? "text-blue-600 font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* PRICE RANGE */}
            <div className="mb-6 border-b pb-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenPrice(!openPrice)}
              >
                <h4 className="text-gray-600 text-sm font-semibold uppercase">
                  Price Range
                </h4>
                {openPrice ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {openPrice && (
                <div className="mt-3">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={tempPrice}
                    onChange={(e) => setTempPrice(Number(e.target.value))}
                    className="w-full cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹0</span>
                    <span className="font-bold text-gray-900">
                      ₹{tempPrice}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* RATING */}
            <div className="mb-6 border-b pb-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenRating(!openRating)}
              >
                <h4 className="text-gray-600 text-sm font-semibold uppercase">
                  Rating
                </h4>
                {openRating ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {openRating && (
                <div className="mt-3 space-y-2">
                  {[4, 3, 2, 1].map((starVal) => (
                    <div
                      key={starVal}
                      onClick={() => setTempRating(starVal)}
                      className={`flex items-center gap-2 cursor-pointer p-1 rounded hover:bg-gray-100 ${
                        tempRating === starVal ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < starVal ? "text-yellow-400" : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-700">& Up</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* STICKY FOOTER BUTTONS */}
          <div className="border-t bg-white p-4 space-y-2 sticky bottom-0">
            <button
              onClick={applyFilters}
              className="w-full py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="w-full py-2 border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
