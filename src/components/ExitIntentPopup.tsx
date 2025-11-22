"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const shownInSession = sessionStorage.getItem("exitIntentShown");
    if (shownInSession) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Add delay before activating (user needs to be on page for at least 5 seconds)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo Kata Hati! Saya tertarik untuk konsultasi gratis. Boleh tanya-tanya dulu?"
    );
    window.open(`https://wa.me/6289654061718?text=${message}`, "_blank");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md animate-fade-in-up">
        <div className="bg-white dark:bg-card rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[gradientShift_3s_ease_infinite]" />
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-center mb-3 text-foreground">
            Tunggu Dulu! 🌟
          </h3>
          <p className="text-center text-muted-foreground mb-6 leading-relaxed">
            Sebelum pergi, yuk manfaatkan{" "}
            <span className="font-semibold text-primary">konsultasi gratis 15 menit</span>{" "}
            untuk tanya-tanya atau diskusi ringan tentang kondisi kamu.
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-6 bg-muted/50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-sm text-foreground">
                <strong>Gratis & tanpa komitmen</strong> - cuma ngobrol santai
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-sm text-foreground">
                <strong>Privasi terjaga 100%</strong> - rahasia kamu aman
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <p className="text-sm text-foreground">
                <strong>Respon cepat</strong> - balas dalam hitungan menit
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={handleWhatsApp}
            className="w-full bg-primary btn-primary-hover text-white h-12 text-base font-semibold mb-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat Gratis via WhatsApp
          </Button>

          <button
            onClick={handleClose}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Nanti dulu, mau lihat-lihat lagi
          </button>
        </div>
      </div>
    </>
  );
}
