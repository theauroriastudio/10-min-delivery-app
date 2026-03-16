import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, ChevronDown, Search, Bell, Clock, Wallet, Home, Briefcase, MapPinned, Plus } from "lucide-react";
import { userData } from "../data/mockData";

const savedAddresses = [
  { id: 1, type: "Home", icon: Home, address: "530/9ka, Kapoorthla, Sector A, Aliganj, Lucknow" },
  { id: 2, type: "Work", icon: Briefcase, address: "Tech Park, Gomti Nagar, Lucknow" },
  { id: 3, type: "Other", icon: MapPinned, address: "City Mall, Hazratganj, Lucknow" },
];

const Header = () => {
  const navigate = useNavigate();
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setShowLocationDropdown(false);
  };

  return (
    <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white sticky top-0 z-40">
      {/* Delivery Info Bar */}
      <div className="px-4 py-2 flex items-center justify-between text-sm bg-teal-700/30">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span className="font-semibold">Delivery in 10 minutes</span>
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
      <div className="px-4 py-2 relative" ref={dropdownRef}>
        <button
          onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          className="flex items-center gap-2 w-full"
        >
          <MapPin className="w-5 h-5 text-white" />
          <div className="flex-1 text-left">
            <p className="text-xs text-teal-100">Deliver to</p>
            <p className="text-sm font-medium truncate max-w-[220px]">
              {selectedAddress.address}
            </p>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        {showLocationDropdown && (
          <div className="absolute left-0 right-0 top-full mt-1 mx-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
            <div className="p-2">
              <p className="text-xs text-gray-500 px-3 py-2 font-medium">SAVED ADDRESSES</p>
              {savedAddresses.map((addr) => {
                const IconComponent = addr.icon;
                return (
                  <button
                    key={addr.id}
                    onClick={() => handleAddressSelect(addr)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                      selectedAddress.id === addr.id 
                        ? 'bg-teal-50 border border-teal-200' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedAddress.id === addr.id ? 'bg-teal-500' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        selectedAddress.id === addr.id ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-medium ${
                        selectedAddress.id === addr.id ? 'text-teal-700' : 'text-gray-800'
                      }`}>
                        {addr.type}
                      </p>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">
                        {addr.address}
                      </p>
                    </div>
                    {selectedAddress.id === addr.id && (
                      <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="border-t border-gray-100">
              <button 
                className="w-full flex items-center gap-3 px-5 py-3 text-teal-600 hover:bg-teal-50 transition-colors"
                onClick={() => {
                  setShowLocationDropdown(false);
                  // Could navigate to add address page
                }}
              >
                <Plus className="w-5 h-5" />
                <span className="text-sm font-medium">Add New Address</span>
              </button>
            </div>
          </div>
        )}
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
