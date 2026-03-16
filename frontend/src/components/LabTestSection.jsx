import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Home, Clock, Percent } from "lucide-react";
import { labTests } from "../data/mockData";

const LabTestSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="px-4 mb-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Lab Tests at Home</h2>
            <p className="text-xs text-gray-500">Free home sample collection</p>
          </div>
          <button
            onClick={() => navigate("/lab-tests")}
            className="flex items-center text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-2">
          {labTests.map((test) => (
            <div
              key={test.id}
              onClick={() => navigate("/lab-tests")}
              className="min-w-[200px] bg-white rounded-2xl shadow-sm border border-purple-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Discount Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  <Percent className="w-3 h-3" />
                  {test.discount}% OFF
                </div>
                {test.homeCollection && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Home className="w-3 h-3" />
                    Home
                  </div>
                )}
              </div>

              {/* Test Info */}
              <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                {test.name}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{test.description}</p>

              {/* Report Time */}
              <div className="flex items-center gap-1 mb-3 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                Report in {test.reportTime}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-gray-800">₹{test.price}</p>
                <p className="text-sm text-gray-400 line-through">₹{test.mrp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTestSection;
