import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Star, Video, Clock } from "lucide-react";
import { doctors } from "../data/mockData";

const DoctorSection = () => {
  const navigate = useNavigate();

  return (
    <div className="py-4">
      <div className="px-4 mb-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Consult a Doctor</h2>
            <p className="text-xs text-gray-500">Get instant video consultation</p>
          </div>
          <button
            onClick={() => navigate("/consult")}
            className="flex items-center text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => navigate("/consult")}
              className="min-w-[200px] bg-white rounded-2xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Doctor Info */}
              <div className="flex gap-3 mb-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-gray-500">{doctor.specialty}</p>
                  <p className="text-xs text-teal-600">{doctor.experience}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-600">{doctor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Video className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-600">
                    {doctor.consultations}+ consults
                  </span>
                </div>
              </div>

              {/* Fee & Status */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-800">₹{doctor.fee}</p>
                  <p className="text-xs text-gray-400">Consultation fee</p>
                </div>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    doctor.available
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  {doctor.available ? "Available" : "Busy"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
