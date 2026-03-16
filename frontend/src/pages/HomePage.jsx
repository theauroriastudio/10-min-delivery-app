import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuickActions from "../components/QuickActions";
import CategorySlider from "../components/CategorySlider";
import BannerCarousel from "../components/BannerCarousel";
import FeaturedProducts from "../components/FeaturedProducts";
import DoctorSection from "../components/DoctorSection";
import LabTestSection from "../components/LabTestSection";
import HealthTips from "../components/HealthTips";

const HomePage = () => {
  return (
    <div className="pb-20 bg-gray-50">
      <Header />
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Banner Carousel */}
      <BannerCarousel />
      
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
    </div>
  );
};

export default HomePage;
