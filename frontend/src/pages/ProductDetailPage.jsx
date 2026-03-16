import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  ShieldCheck,
  Truck,
  Package,
  Clock,
  Plus,
  Minus,
  Share2,
  Heart,
} from "lucide-react";
import { featuredProducts } from "../data/mockData";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart, cartItems, updateQuantity } = useCart();

  const product = featuredProducts.find((p) => p.id === parseInt(id)) || featuredProducts[0];
  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="pb-32 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="bg-white">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              {product.discount}% OFF
            </div>
          )}
          {product.prescription && (
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              Rx Required
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h1>
        <p className="text-gray-500 text-sm mb-3">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-green-700" />
            <span className="text-sm font-semibold">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">1.2k ratings</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
          <span className="text-lg text-gray-400 line-through">₹{product.mrp}</span>
          <span className="text-green-600 font-semibold">
            Save ₹{product.mrp - product.price}
          </span>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-white px-4 py-4 mt-2">
        <h3 className="text-sm font-bold text-gray-800 mb-3">Delivery Options</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Express Delivery</p>
              <p className="text-xs text-gray-500">Get it in 30 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Standard Delivery</p>
              <p className="text-xs text-gray-500">Free on orders above ₹500</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Return Policy</p>
              <p className="text-xs text-gray-500">7 days easy return</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="bg-white px-4 py-4 mt-2">
        <h3 className="text-sm font-bold text-gray-800 mb-3">Product Details</h3>
        <div className="space-y-2">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">Manufacturer</span>
            <span className="text-sm text-gray-800 font-medium">Micro Labs Ltd</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">Pack Size</span>
            <span className="text-sm text-gray-800 font-medium">{product.description}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500">Expires on</span>
            <span className="text-sm text-gray-800 font-medium">Dec 2026</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-500">Country of Origin</span>
            <span className="text-sm text-gray-800 font-medium">India</span>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 py-3 bg-white border-t border-gray-100">
        {cartItem ? (
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center justify-center gap-4 bg-gray-100 rounded-xl py-3">
              <button
                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-lg font-bold w-8 text-center">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={() => navigate("/cart")}
              className="flex-1 bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors"
            >
              Go to Cart
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
