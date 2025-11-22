"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 left-6 z-40 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
