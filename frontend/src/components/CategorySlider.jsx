import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Pill, Heart, Sparkles, Baby, Leaf, FlaskConical, Droplets, Apple } from "lucide-react";
import { categories } from "../data/mockData";

const iconMap = {
  Pill: Pill,
  Heart: Heart,
  Sparkles: Sparkles,
  Baby: Baby,
  Leaf: Leaf,
  FlaskConical: FlaskConical,
  Droplets: Droplets,
  Apple: Apple,
};

const CategorySlider = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-lg font-bold text-gray-800">Shop by Category</h2>
        <button
          onClick={() => navigate("/categories")}
          className="flex items-center text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
        >
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 pb-2">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => navigate("/categories")}
                className="flex flex-col items-center min-w-[72px] group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md border border-gray-100"
                  style={{ backgroundColor: `${category.color}10` }}
                >
                  <IconComponent
                    className="w-7 h-7"
                    style={{ color: category.color }}
                  />
                </div>
                <p className="text-xs text-gray-700 font-medium text-center">
                  {category.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
