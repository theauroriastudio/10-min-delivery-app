import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Video, Clock, Filter, Search, Phone, MessageCircle } from "lucide-react";
import { doctors } from "../data/mockData";
import { toast } from "sonner";

const ConsultDoctorPage = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = ["All", "General Physician", "Dermatologist", "Pediatrician", "Gynecologist"];

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctors
      : doctors.filter((d) => d.specialty === selectedSpecialty);

  const handleConsult = (doctor, type) => {
    if (doctor.available) {
      toast.success(`${type} consultation booked with ${doctor.name}`);
    } else {
      toast.error(`${doctor.name} is currently unavailable`);
    }
  };

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold">Consult a Doctor</h1>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="bg-white/20 rounded-xl flex items-center gap-3 px-4 py-3">
            <Search className="w-5 h-5 text-white/70" />
            <input
              type="text"
              placeholder="Search doctors, specialties..."
              className="flex-1 bg-transparent text-white placeholder-white/70 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Specialty Filter */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedSpecialty === specialty
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 py-3">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-blue-800 mb-1">
            Instant Video Consultation
          </h3>
          <p className="text-xs text-blue-600">
            Connect with verified doctors within 2 minutes. 24/7 available.
          </p>
        </div>
      </div>

      {/* Doctors List */}
      <div className="px-4 py-2">
        <div className="space-y-3">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"
            >
              {/* Doctor Info */}
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      doctor.available ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  <p className="text-sm text-blue-600">{doctor.experience} exp.</p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">
                        {doctor.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Video className="w-4 h-4" />
                      <span className="text-xs">{doctor.consultations}+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee & Actions */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-lg font-bold text-gray-800">₹{doctor.fee}</p>
                  <p className="text-xs text-gray-500">Consultation fee</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleConsult(doctor, "Chat")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      doctor.available
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-50 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!doctor.available}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat
                  </button>
                  <button
                    onClick={() => handleConsult(doctor, "Video")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      doctor.available
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!doctor.available}
                  >
                    <Video className="w-4 h-4" />
                    Consult
                  </button>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span
                  className={`text-xs font-medium ${
                    doctor.available ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {doctor.available ? "Available now" : "Next available: Tomorrow 10 AM"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctorPage;
