import React from "react";
import { Droplets, Activity, Apple } from "lucide-react";
import { healthTips } from "../data/mockData";

const iconMap = {
  Droplets: Droplets,
  Activity: Activity,
  Apple: Apple,
};

const HealthTips = () => {
  return (
    <div className="py-4 px-4">
      <h2 className="text-lg font-bold text-gray-800 mb-3">Daily Health Tips</h2>
      <div className="space-y-3">
        {healthTips.map((tip, index) => {
          const IconComponent = iconMap[tip.icon];
          const colors = [
            { bg: "bg-blue-50", text: "text-blue-600" },
            { bg: "bg-green-50", text: "text-green-600" },
            { bg: "bg-orange-50", text: "text-orange-600" },
          ];
          const colorSet = colors[index % colors.length];

          return (
            <div
              key={tip.id}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
            >
              <div
                className={`w-12 h-12 ${colorSet.bg} rounded-xl flex items-center justify-center`}
              >
                <IconComponent className={`w-6 h-6 ${colorSet.text}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">{tip.title}</h3>
                <p className="text-xs text-gray-500">{tip.description}</p>
              </div>
            </div>
          );
        })};
      </div>
    </div>
  );
};

export default HealthTips;
