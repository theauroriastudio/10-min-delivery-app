import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Star, Plus, ShieldCheck } from "lucide-react";
import { featuredProducts } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-bold text-gray-800">Featured Products</h2>
        <button
          onClick={() => navigate("/search")}
          className="flex items-center text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-2">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="min-w-[160px] bg-white rounded-2xl shadow-sm border border-gray-100 p-3 cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  {product.discount}% OFF
                </div>
              )}

              {/* Product Image */}
              <div className="relative w-full h-24 bg-gray-50 rounded-xl mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.prescription && (
                  <div className="absolute top-1 right-1 bg-blue-500 p-1 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-gray-600">{product.rating}</span>
              </div>

              {/* Price & Add Button */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-800">₹{product.price}</p>
                  <p className="text-xs text-gray-400 line-through">₹{product.mrp}</p>
                </div>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white hover:bg-teal-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
