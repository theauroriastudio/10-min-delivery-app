import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Clock, Percent, Search, Filter, Calendar, MapPin, Check } from "lucide-react";
import { labTests } from "../data/mockData";
import { toast } from "sonner";

const LabTestsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Popular", "Full Body", "Diabetes", "Thyroid", "Heart"];

  const handleBookTest = (test) => {
    toast.success(`${test.name} booked successfully!`);
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Lab Tests</h1>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="bg-white/20 rounded-xl flex items-center gap-3 px-4 py-3">
            <Search className="w-5 h-5 text-white/70" />
            <input
              type="text"
              placeholder="Search tests, packages..."
              className="flex-1 bg-transparent text-white placeholder-white/70 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Banner */}
      <div className="px-4 py-3">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-purple-800 mb-2">Why book with us?</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-purple-700">Free home collection</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-purple-700">NABL certified labs</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-purple-700">Digital reports</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-purple-700">Up to 60% off</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tests List */}
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Popular Tests
        </h3>
        <div className="space-y-3">
          {labTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
            >
              {/* Test Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-1">{test.name}</h3>
                  <p className="text-sm text-gray-500">{test.description}</p>
                </div>
                <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  {test.discount}% OFF
                </div>
              </div>

              {/* Test Features */}
              <div className="flex flex-wrap gap-3 mb-4">
                {test.homeCollection && (
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Home className="w-4 h-4 text-purple-500" />
                    Home Collection
                  </div>
                )}
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <Clock className="w-4 h-4 text-purple-500" />
                  Report in {test.reportTime}
                </div>
              </div>

              {/* Price & Book */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-800">₹{test.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{test.mrp}</span>
                  </div>
                  <p className="text-xs text-green-600 font-medium">
                    You save ₹{test.mrp - test.price}
                  </p>
                </div>
                <button
                  onClick={() => handleBookTest(test)}
                  className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Selector */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-purple-600" />
            <div className="flex-1">
              <p className="text-xs text-gray-500">Sample collection at</p>
              <p className="text-sm font-medium text-gray-800">530/9ka, Kapoorthla, Sector A, Aliganj</p>
            </div>
            <button className="text-purple-600 text-sm font-medium">Change</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestsPage;
