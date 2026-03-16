import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuickActions from "../components/QuickActions";
import CategorySlider from "../components/CategorySlider";
import BannerCarousel from "../components/BannerCarousel";
import FeaturedProducts from "../components/FeaturedProducts";
import DoctorSection from "../components/DoctorSection";
import LabTestSection from "../components/LabTestSection";
import HealthTips from "../components/HealthTips";
import OffersStrip from "../components/OffersStrip";

const HomePage = () => {
  return (
    <div className="pb-20 bg-gray-50">
      <Header />
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Banner Carousel */}
      <BannerCarousel />
      
      {/* Offers Strip */}
      <OffersStrip />
      
      {/* Categories */}
      <CategorySlider />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Doctor Consultation */}
      <DoctorSection />
      
      {/* Lab Tests */}
      <LabTestSection />
      
      {/* Health Tips */}
      <HealthTips />
      
      {/* Footer spacing */}
      <div className="h-4" />
    </div>
  );
};

export default HomePage;
