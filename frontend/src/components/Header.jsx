import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Search, Bell, Clock, Wallet } from "lucide-react";
import { userData } from "../data/mockData";

const Header = () => {
  const navigate = useNavigate();
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white sticky top-0 z-40">
      {/* Delivery Info Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-sm bg-teal-700/30">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span className="font-semibold">Delivery in 30 minutes</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("/profile")}
            className="flex items-center gap-1 text-xs"
          >
            <Wallet className="w-4 h-4" />
            <span>₹{userData.wallet}</span>
          </button>
          <button className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>

      {/* Location Selector */}
      <div className="px-4 py-2">
        <button
          onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          className="flex items-center gap-2 w-full"
        >
          <MapPin className="w-5 h-5 text-white" />
          <div className="flex-1 text-left">
            <p className="text-xs text-teal-100">Deliver to</p>
            <p className="text-sm font-medium truncate max-w-[220px]">
              {userData.address}
            </p>
          </div>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-4">
        <button
          onClick={() => navigate("/search")}
          className="w-full bg-white rounded-xl flex items-center gap-3 px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400 text-sm">Search medicines, health products...</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
