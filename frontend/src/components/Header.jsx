import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Search, Bell, Clock } from "lucide-react";
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
        <button className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
          <Bell className="w-3 h-3" />
          <span>Offers</span>
        </button>
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
            <p className="text-sm font-medium truncate max-w-[200px]">
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
          className="w-full bg-white rounded-xl flex items-center gap-3 px-4 py-3 shadow-sm"
        >
          <Search className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400 text-sm">Search 'Homeopathy'</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
