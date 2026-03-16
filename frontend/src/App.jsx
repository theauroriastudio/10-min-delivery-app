import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";
import ConsultDoctorPage from "./pages/ConsultDoctorPage";
import LabTestsPage from "./pages/LabTestsPage";
import BottomNavigation from "./components/BottomNavigation";
import InstallPrompt from "./components/InstallPrompt";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App bg-gray-50 min-h-screen">
        <BrowserRouter>
          <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/consult" element={<ConsultDoctorPage />} />
              <Route path="/lab-tests" element={<LabTestsPage />} />
            </Routes>
            <BottomNavigation />
            <InstallPrompt />
          </div>
        </BrowserRouter>
        <Toaster position="top-center" />
      </div>
    </CartProvider>
  );
}

export default App;
