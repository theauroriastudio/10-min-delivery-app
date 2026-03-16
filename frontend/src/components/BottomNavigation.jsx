import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Grid3X3, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "categories", icon: Grid3X3, label: "Categories", path: "/categories" },
    { id: "cart", icon: ShoppingCart, label: "Cart", path: "/cart", badge: cartCount },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 shadow-lg z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center py-2 px-4 relative transition-all duration-200 ${
              isActive(item.path)
                ? "text-teal-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <div className="relative">
              <item.icon
                className={`w-6 h-6 transition-transform duration-200 ${
                  isActive(item.path) ? "scale-110" : ""
                }`}
                strokeWidth={isActive(item.path) ? 2.5 : 2}
              />
              {item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {item.badge > 9 ? "9+" : item.badge}
                </span>
              )}
            </div>
            <span
              className={`text-xs mt-1 font-medium ${
                isActive(item.path) ? "text-teal-600" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
            {isActive(item.path) && (
              <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-12 h-1 bg-teal-600 rounded-b-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
