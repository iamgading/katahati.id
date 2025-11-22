"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollSpy } from "@/components/ScrollSpy";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proses", href: "#proses" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Tes Singkat", href: "#tes-singkat" },
    { label: "Artikel", href: "#artikel" },
    { label: "FAQ", href: "#faq" },
  ];

  const sectionIds = useMemo(() => menuItems.map(item => item.href.replace('#', '')), []);
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm animate-fade-in transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
            </div>
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Kata Hati
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="bg-primary btn-primary-hover text-white">
              <Link href="#booking">Booking Sesi</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-all duration-300 z-50 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-7 h-7 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-white/95 dark:bg-card/95 backdrop-blur-md overflow-y-auto transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4 min-h-full flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-lg font-medium text-muted-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 border-b border-border/50"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-10px)'
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto pt-6 pb-8 space-y-4">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <Button asChild className="w-full bg-primary btn-primary-hover text-white h-12 text-lg">
              <Link href="#booking" onClick={() => setIsMenuOpen(false)}>
                Booking Sesi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
