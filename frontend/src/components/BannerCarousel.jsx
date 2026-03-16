import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react";
import { useBanners } from "../hooks/useData";
import { toast } from "sonner";

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(null);
  const { data: banners, loading } = useBanners();

  useEffect(() => {
    if (!banners?.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners]);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Code ${code} copied!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const goToPrev = () => {
    if (!banners?.length) return;
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    if (!banners?.length) return;
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  if (loading || !banners?.length) {
    return (
      <div className="px-4 py-2">
        <div className="h-32 bg-gray-200 rounded-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="px-4 py-2">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="min-w-full p-5 relative"
              style={{
                background: `linear-gradient(135deg, ${banner.bgColor || banner.bg_color} 0%, ${banner.bgColor || banner.bg_color}dd 100%)`,
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {banner.title}
                </h3>
                <p className="text-white/90 text-sm mb-3">{banner.subtitle}</p>
                <button
                  onClick={() => copyCode(banner.code)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                >
                  <span className="font-mono font-semibold">{banner.code}</span>
                  {copiedCode === banner.code ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20">
                <div className="w-full h-full bg-white/10 rounded-l-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-6 bg-white"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
