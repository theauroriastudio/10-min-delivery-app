import React from "react";
import { Gift, Percent, Truck, Clock } from "lucide-react";

const OffersStrip = () => {
  const offers = [
    { icon: Percent, text: "Up to 25% OFF", color: "text-red-500" },
    { icon: Truck, text: "Free Delivery 500+", color: "text-teal-600" },
    { icon: Clock, text: "30 Min Delivery", color: "text-blue-600" },
    { icon: Gift, text: "Cashback Offers", color: "text-purple-600" },
  ];

  return (
    <div className="px-4 py-2">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100 whitespace-nowrap"
            >
              <offer.icon className={`w-4 h-4 ${offer.color}`} />
              <span className="text-xs font-medium text-gray-700">{offer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersStrip;
