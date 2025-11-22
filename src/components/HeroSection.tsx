"use client";

import { Button } from "@/components/ui/button";
import { Shield, Video, Heart, Users, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingParticles from "@/components/FloatingParticles";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles count={15} />
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/herobg.jpg"
          alt="Background texture"
          fill
          className="object-cover opacity-40 blur-sm"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 dark:from-background/80 via-white/70 dark:via-background/70 to-white/90 dark:to-background/90 transition-colors duration-300" />
      </div>

      {/* Animated Morphing Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent animate-morph blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-secondary/25 via-primary/15 to-transparent animate-morph blur-3xl" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-secondary/10 animate-morph blur-3xl" style={{ animationDelay: '10s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left w-full">
            <div className="space-y-4 sm:space-y-5">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance px-2 sm:px-0 animate-fade-in-up">
                Dengarkan{" "}
                <span className="text-primary">Kata Hati</span>mu.{" "}
                <br className="hidden sm:block" />
                Kamu Gak Sendirian.
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Konseling psikologi dengan <span className="font-semibold text-foreground">psikolog berlisensi</span>. 
                Online & offline. <span className="font-semibold text-foreground">Privasi 100% terjaga</span>.
              </p>
              
              {/* Animated Statistics */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start px-2 sm:px-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50 shadow-sm hover-scale">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-primary" suppressHydrationWarning>
                      <AnimatedCounter end={200} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Klien Puas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50 shadow-sm hover-scale">
                  <Heart className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-2xl font-bold text-secondary" suppressHydrationWarning>
                      <AnimatedCounter end={5} suffix="+" />
                    </p>
                    <p className="text-xs text-muted-foreground">Tahun Pengalaman</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50 shadow-sm hover-scale">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-accent" suppressHydrationWarning>
                      <AnimatedCounter end={2} />h
                    </p>
                    <p className="text-xs text-muted-foreground">Respon Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 px-2 sm:px-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 sm:h-13 text-base sm:text-lg bg-primary text-white shadow-lg shadow-primary/25 btn-primary-hover w-full sm:w-auto animate-glow-pulse"
                >
                  <Link href="#booking">
                    <div className="flex flex-col items-center sm:items-start">
                      <span>Mulai Konseling Sekarang</span>
                      <span className="text-xs opacity-90">Respon dalam 2 jam</span>
                    </div>
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-13 text-base sm:text-lg border-2 border-primary text-primary btn-secondary-hover w-full sm:w-auto"
                >
                  <Link
                    href="https://wa.me/6289654061718?text=Halo,%20saya%20ingin%20konsultasi"
                    target="_blank"
                  >
                    Chat via WhatsApp
                  </Link>
                </Button>
              </div>
              
              {/* Urgency indicator */}
              <p className="text-xs text-center lg:text-left text-muted-foreground px-2 sm:px-0">
                ⚡ <span className="font-semibold text-foreground">3 slot tersedia</span> minggu ini
              </p>
            </div>

            {/* Animated Trust Indicators */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-card/80 rounded-full px-3 py-1.5 border border-border/50 backdrop-blur-sm shadow-sm hover-scale">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <p className="text-xs font-semibold text-foreground">Berlisensi</p>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-card/80 rounded-full px-3 py-1.5 border border-border/50 backdrop-blur-sm shadow-sm hover-scale">
                <Video className="w-3.5 h-3.5 text-primary" />
                <p className="text-xs font-semibold text-foreground">Online/Offline</p>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 dark:bg-card/80 rounded-full px-3 py-1.5 border border-border/50 backdrop-blur-sm shadow-sm hover-scale">
                <span className="text-xs">🔒</span>
                <p className="text-xs font-semibold text-foreground">100% Rahasia</p>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration - Animated */}
          <div className="order-1 lg:order-2 w-full max-w-[280px] sm:max-w-sm lg:max-w-none mx-auto relative px-2 sm:px-4 lg:px-0 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/5 ring-1 ring-border/50 hover-scale">
              {/* Animated SVG Pattern Background */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gentle-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 Q 25 40, 50 50 T 100 50" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.1">
                      <animate attributeName="d" 
                        values="M0 50 Q 25 40, 50 50 T 100 50;M0 50 Q 25 60, 50 50 T 100 50;M0 50 Q 25 40, 50 50 T 100 50" 
                        dur="8s" 
                        repeatCount="indefinite" />
                    </path>
                    <path d="M0 60 Q 25 50, 50 60 T 100 60" stroke="hsl(var(--secondary))" strokeWidth="0.5" fill="none" opacity="0.08">
                      <animate attributeName="d" 
                        values="M0 60 Q 25 50, 50 60 T 100 60;M0 60 Q 25 70, 50 60 T 100 60;M0 60 Q 25 50, 50 60 T 100 60" 
                        dur="10s" 
                        repeatCount="indefinite" />
                    </path>
                  </pattern>
                  <linearGradient id="soft-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.15}} />
                    <stop offset="50%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.1}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.05}} />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#soft-gradient)"/>
                <rect width="100%" height="100%" fill="url(#gentle-waves)"/>
                {/* Animated Floating circles */}
                <circle cx="20%" cy="30%" r="60" fill="hsl(var(--primary))" opacity="0.05">
                  <animate attributeName="cy" values="30%;25%;30%" dur="6s" repeatCount="indefinite" />
                  <animate attributeName="r" values="60;70;60" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="75%" cy="60%" r="80" fill="hsl(var(--secondary))" opacity="0.06">
                  <animate attributeName="cy" values="60%;65%;60%" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="r" values="80;90;80" dur="8s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="80%" r="50" fill="hsl(var(--primary))" opacity="0.04">
                  <animate attributeName="cy" values="80%;75%;80%" dur="7s" repeatCount="indefinite" />
                </circle>
              </svg>
              
              {/* Central Icon with Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8 relative z-10 animate-float">
                  <p className="text-4xl sm:text-5xl font-bold text-primary">Kata Hati</p>
                  <div className="w-40 h-40 mx-auto rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover-scale">
                    <Heart className="w-20 h-20 text-teal-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            {/* Animated Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
