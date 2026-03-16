import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, X, Clock, TrendingUp, Star, Plus } from "lucide-react";
import { featuredProducts, popularCategories } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const SearchPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState(["Dolo 650", "Crocin", "Vitamin D", "Pain Relief"]);

  const filteredProducts = searchQuery
    ? featuredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Search Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medicines, health products..."
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {searchQuery ? (
        // Search Results
        <div className="px-4 py-4">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-gray-500 mb-3">
                {filteredProducts.length} results found
              </p>
              <div className="space-y-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-3 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-xl object-cover bg-gray-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-gray-800">
                            ₹{product.price}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            ₹{product.mrp}
                          </span>
                          <span className="text-xs text-green-600 font-medium">
                            {product.discount}% off
                          </span>
                        </div>
                        <button
                          onClick={(e) => handleAddToCart(product, e)}
                          className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No products found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      ) : (
        // Default View
        <>
          {/* Recent Searches */}
          <div className="px-4 py-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="px-4 py-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending Now
            </h3>
            <div className="space-y-2">
              {popularCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSearchQuery(category.name)}
                  className="w-full flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-xs font-semibold text-teal-600">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-800">{category.name}</span>
                  <span className="ml-auto text-xs text-gray-400">
                    {category.count}+ products
                  </span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
