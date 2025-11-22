"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [contextMessage, setContextMessage] = useState("Halo Kata Hati, saya ingin konsultasi");
  const [tooltipText, setTooltipText] = useState("Ada yang bisa kami bantu? 😊");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Show tooltip after 3 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Context-aware messages based on scroll position
  useEffect(() => {
    const updateContext = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Hero/Top section (0-20%)
      if (scrollPercentage < 20) {
        setContextMessage("Halo Kata Hati, saya ingin tanya tentang layanan konseling");
        setTooltipText("Punya pertanyaan? Chat kami! 😊");
      }
      // Services section (20-40%)
      else if (scrollPercentage < 40) {
        setContextMessage("Halo, saya tertarik dengan layanan konseling. Bisa dijelaskan lebih lanjut?");
        setTooltipText("Butuh bantuan memilih layanan? 💬");
      }
      // Testimonials/Middle (40-60%)
      else if (scrollPercentage < 60) {
        setContextMessage("Halo, saya ingin booking sesi konseling");
        setTooltipText("Siap untuk memulai? Chat kami! ✨");
      }
      // FAQ/Bottom (60-80%)
      else if (scrollPercentage < 80) {
        setContextMessage("Halo, saya punya pertanyaan seputar konseling");
        setTooltipText("Ada pertanyaan? Kami siap membantu! 🤝");
      }
      // CTA/Very Bottom (80-100%)
      else {
        setContextMessage("Halo Kata Hati, saya siap untuk booking sesi konseling");
        setTooltipText("Yuk mulai perjalanan healing-mu! 🤍");
      }
    };

    window.addEventListener("scroll", updateContext);
    updateContext(); // Initial call
    return () => window.removeEventListener("scroll", updateContext);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/6289654061718?text=${encodeURIComponent(contextMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 group ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        aria-label="Chat via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 group-hover:scale-110 transition-transform"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20" />
        
        {/* Online indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 border-2 border-white rounded-full animate-pulse" />
      </a>

      {/* Smart Tooltip */}
      {showTooltip && isVisible && (
        <div className="fixed bottom-24 right-6 z-50 animate-fade-in-up">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200 dark:border-gray-700">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Content */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-800 dark:text-white">
                {tooltipText}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-200">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-1"></span> <span className="font-medium">Sedang online</span> - Respon dalam 2 jam
              </p>
              <a
                href={`https://wa.me/6289654061718?text=${encodeURIComponent(contextMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 border-2 border-primary text-primary btn-secondary-hover text-sm font-medium rounded-lg"
                onClick={() => setShowTooltip(false)}
              >
                Chat Sekarang
              </a>
            </div>

            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700 transform rotate-45" />
          </div>
        </div>
      )}
    </>
  );
}
