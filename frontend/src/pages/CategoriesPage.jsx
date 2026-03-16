import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Pill, Heart, Sparkles, Baby, Leaf, FlaskConical, Droplets, Apple, ChevronRight } from "lucide-react";
import { categories, popularCategories } from "../data/mockData";

const iconMap = {
  Pill: Pill,
  Heart: Heart,
  Sparkles: Sparkles,
  Baby: Baby,
  Leaf: Leaf,
  FlaskConical: FlaskConical,
  Droplets: Droplets,
  Apple: Apple,
  Thermometer: Pill,
  Wind: Heart,
  Zap: Sparkles,
  Cross: FlaskConical,
};

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-bold text-gray-800">All Categories</h1>
        </div>
      </div>

      {/* Main Categories */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Shop by Category
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => navigate("/search")}
                className="flex flex-col items-center group"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md border border-gray-100"
                  style={{ backgroundColor: `${category.color}15` }}
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

      {/* Popular Categories */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Popular Categories
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {popularCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Pill;
            return (
              <button
                key={category.id}
                onClick={() => navigate("/search")}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                  index !== popularCategories.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">{category.count}+ products</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
