import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import CategoryBar from "../components/CategoryBar";
import DealsSection from "../components/DealsSection";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import SkeletonLoader from "../components/SkeletonLoader";
import API from "../api/api";

const ProductsPage = () => {
  // PRODUCT DATA
  const [products, setProducts] = useState([]);
  const [topDeals, setTopDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // APPLIED FILTERS (used in API)
  const [appliedCategory, setAppliedCategory] = useState("All");
  const [appliedPrice, setAppliedPrice] = useState(5000);
  const [appliedRating, setAppliedRating] = useState(0);
  const [appliedSort, setAppliedSort] = useState("default");

  // TEMP FILTERS (for UI before Apply)
  const [tempCategory, setTempCategory] = useState("All");
  const [tempPrice, setTempPrice] = useState(5000);
  const [tempRating, setTempRating] = useState(0);

  // OTHER STATE
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // PAGINATION
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // SIDEBAR
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /* Load Categories */
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await API.get("/categories");
        setCategories(res.data);
      } catch {
        setCategories(["Electronics", "Fashion", "Home", "Beauty", "Sports"]);
      }
    };
    loadCategories();
  }, []);

  /* load product */
  const loadProducts = async () => {
    setLoading(true);
    try {
      const params = {
        page,
        limit: 12,
        maxPrice: appliedPrice,
      };

      if (appliedCategory !== "All") params.category = appliedCategory;
      if (appliedRating > 0) params.rating = appliedRating;
      if (searchTerm.trim() !== "") params.q = searchTerm;

      if (appliedSort === "lowToHigh") {
        params.sort = "price";
        params.order = "asc";
      } else if (appliedSort === "highToLow") {
        params.sort = "price";
        params.order = "desc";
      }

      const res = await API.get("/products", { params });
      setProducts(res.data.products || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error("Error loading products:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, [appliedCategory, appliedPrice, appliedRating, appliedSort, searchTerm, page]);

  /*load deals*/
  useEffect(() => {
    const loadDeals = async () => {
      try {
        const res = await API.get("/products/all");
        setTopDeals(res.data.slice(0, 10));
      } catch {
        // ignore
      }
    };
    loadDeals();
  }, []);

  /* apply filters button */
  const applyFilters = () => {
    setAppliedCategory(tempCategory);
    setAppliedPrice(tempPrice);
    setAppliedRating(tempRating);
    setPage(1);
    setIsSidebarOpen(false);
  };

  /* clear all filters */
  const clearFilters = () => {
    setTempCategory("All");
    setTempPrice(5000);
    setTempRating(0);

    setAppliedCategory("All");
    setAppliedPrice(5000);
    setAppliedRating(0);
    setAppliedSort("default");
    setSearchTerm("");
    setPage(1);
  };

  /*  clear individual filters (chips)  */
  const clearCategoryChip = () => {
    setAppliedCategory("All");
    setTempCategory("All");
    setPage(1);
  };

  const clearPriceChip = () => {
    setAppliedPrice(5000);
    setTempPrice(5000);
    setPage(1);
  };

  const clearRatingChip = () => {
    setAppliedRating(0);
    setTempRating(0);
    setPage(1);
  };

  const clearSearchChip = () => {
    setSearchTerm("");
    setPage(1);
  };

  /* Render */

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar
        onSearchSubmit={(term) => {
          setSearchTerm(term);
          setPage(1);
        }}
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mt-4">
        <Breadcrumb
          items={[
            "Home",
            appliedCategory === "All" ? "Products" : appliedCategory,
          ]}
        />
      </div>

      {/* Hero */}
      {!searchTerm && page === 1 && (
        <div className="container mx-auto px-4 mt-4">
          <HeroCarousel />
        </div>
      )}

      {/* Category Bar */}
      <div className="container mx-auto px-4 mt-6">
        <CategoryBar onCategoryClick={(cat) => setTempCategory(cat)} />
      </div>

      {/* Deals Section */}
      <div className="container mx-auto px-4 mt-10">
        <DealsSection title="Today's Top Deals" products={topDeals} />
      </div>

      {/* Main Layout */}
      <div className="container mx-auto px-4 py-6 flex gap-6 relative">
        {/* sidebar */}
        <FilterSidebar
          categories={categories}
          tempCategory={tempCategory}
          setTempCategory={setTempCategory}
          tempPrice={tempPrice}
          setTempPrice={setTempPrice}
          tempRating={tempRating}
          setTempRating={setTempRating}
          applyFilters={applyFilters}
          clearFilters={clearFilters}
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(false)}
        />

        {/* products section */}
        <div className="flex-1">
          {/* Mobile: Filter + Sort */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow font-semibold"
            >
              Filters
            </button>

            <select
              value={appliedSort}
              onChange={(e) => {
                setAppliedSort(e.target.value);
                setPage(1);
              }}
              className="border rounded px-3 py-2 text-sm bg-white"
            >
              <option value="default">Sort</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* DESKTOP: Sort + Chips */}
          <div className="hidden md:block mb-3">
            <div className="flex justify-between items-center bg-white p-3 border rounded shadow-sm">
              <span className="text-sm text-gray-600">
                Showing <strong>{products.length}</strong> results
                {searchTerm && (
                  <>
                    {" "}
                    for{" "}
                    <span className="font-semibold text-orange-600">
                      {searchTerm}
                    </span>
                  </>
                )}
              </span>

              <select
                value={appliedSort}
                onChange={(e) => {
                  setAppliedSort(e.target.value);
                  setPage(1);
                }}
                className="border-gray-300 rounded cursor-pointer text-sm"
              >
                <option value="default">Featured</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            {/* FILTER CHIPS */}
            <div className="flex flex-wrap gap-2 mt-3">
              {appliedCategory !== "All" && (
                <button
                  onClick={clearCategoryChip}
                  className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1"
                >
                  {appliedCategory} <span className="text-xs">✕</span>
                </button>
              )}

              {appliedPrice < 5000 && (
                <button
                  onClick={clearPriceChip}
                  className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200 flex items-center gap-1"
                >
                  Up to ₹{appliedPrice} <span className="text-xs">✕</span>
                </button>
              )}

              {appliedRating > 0 && (
                <button
                  onClick={clearRatingChip}
                  className="px-3 py-1 text-xs rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200 flex items-center gap-1"
                >
                  {appliedRating}★ & up <span className="text-xs">✕</span>
                </button>
              )}

              {searchTerm && (
                <button
                  onClick={clearSearchChip}
                  className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1"
                >
                  Search: {searchTerm} <span className="text-xs">✕</span>
                </button>
              )}
            </div>
          </div>

          {/* product grid  */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {[...Array(8)].map((_, i) => (
                <SkeletonLoader key={i} />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {products.length > 0 ? (
                  products.map((p) => <ProductCard key={p._id} product={p} />)
                ) : (
                  <div className="col-span-full text-center py-20">
                    <h3 className="text-xl font-bold text-gray-700">
                      No products found
                    </h3>
                    <button
                      onClick={clearFilters}
                      className="text-blue-600 underline mt-3"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {products.length > 0 && (
                <div className="mt-8">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={(p) => setPage(p)}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default ProductsPage;
