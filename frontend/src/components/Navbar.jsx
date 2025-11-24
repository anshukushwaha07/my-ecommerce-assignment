import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaUser } from 'react-icons/fa';
import API from '../api/api'; 

const Navbar = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await API.get(`/search?q=${query}`);
        setSuggestions(res.data.slice(0, 5));
        setShowSuggestions(true);
      } catch (err) {
        console.error("Search error", err);
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (name) => {
    setQuery(name);
    setShowSuggestions(false);
    onSearchSubmit(name);
  };

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <div className="text-2xl font-bold text-yellow-400 tracking-tighter">ShopMERN</div>
        </div>

        {/* Search Bar - Hidden on super small screens, visible on mobile+ */}
        <div className="relative flex-1 max-w-2xl hidden sm:block">
          <div className="flex items-center bg-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-yellow-500">
            <input
              type="text"
              className="w-full p-2.5 text-gray-800 outline-none"
              placeholder="Search for products, brands and more"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            <button
              onClick={() => onSearchSubmit(query)}
              className="bg-yellow-400 px-5 py-3 hover:bg-yellow-500 text-slate-900 transition-colors"
            >
              <FaSearch />
            </button>
          </div>

          {/* Autosuggest Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white text-black shadow-xl rounded-b-md border-t border-gray-100 z-50">
              {suggestions.map((item) => (
                <li
                  key={item._id}
                  onClick={() => handleSelect(item.name)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
                >
                  <FaSearch className="text-gray-400 text-xs" />
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col text-xs cursor-pointer hover:border hover:border-white p-1 rounded">
            <span className="text-gray-300">Hello, Sign in</span>
            <span className="font-bold text-sm">Account & Lists</span>
          </div>
          
          <div className="relative cursor-pointer hover:text-yellow-400 transition">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Bar (Visible only on very small screens) */}
      <div className="sm:hidden px-4 pb-3">
         <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              className="w-full p-2 text-gray-800 outline-none text-sm"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => onSearchSubmit(query)} className="bg-yellow-400 p-2 text-slate-900">
              <FaSearch />
            </button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;