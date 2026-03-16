import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Tag, ChevronRight, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const deliveryFee = cartItems.length > 0 ? (getCartTotal() > 500 ? 0 : 30) : 0;
  const discount = Math.floor(getCartTotal() * 0.05);
  const total = getCartTotal() + deliveryFee - discount;

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Order placed successfully!");
      clearCart();
    }
  };

  return (
    <div className="pb-40 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">My Cart</h1>
          {cartItems.length > 0 && (
            <span className="ml-auto text-sm text-gray-500">
              {cartItems.length} items
            </span>
          )}
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Add medicines and healthcare products to your cart
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Delivery Info */}
          <div className="px-4 py-3">
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center gap-3">
              <Truck className="w-5 h-5 text-teal-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-teal-800">
                  {getCartTotal() >= 500
                    ? "You get FREE delivery!"
                    : `Add ₹${500 - getCartTotal()} more for FREE delivery`}
                </p>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="px-4 py-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex gap-3 p-4 ${
                    index !== cartItems.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm font-bold text-gray-800">₹{item.price}</p>
                      <p className="text-xs text-gray-400 line-through">₹{item.mrp}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-teal-600"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coupon */}
          <div className="px-4 py-2">
            <button className="w-full bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <Tag className="w-5 h-5 text-teal-600" />
              <span className="flex-1 text-left text-sm font-medium text-gray-800">
                Apply Coupon Code
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Bill Details */}
          <div className="px-4 py-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Bill Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Item Total</span>
                  <span className="text-gray-800">₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : "text-gray-800"}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount (5%)</span>
                  <span className="text-green-600">-₹{discount}</span>
                </div>
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-800">Total</span>
                    <span className="text-gray-800">₹{total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 py-3 bg-white border-t border-gray-100">
          <button
            onClick={handleCheckout}
            className="w-full bg-teal-600 text-white py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>Place Order</span>
            <span className="text-teal-200">|₹{total}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
