"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, BadgeCheck, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "S., 21 tahun",
      role: "Mahasiswa",
      initial: "S",
      content:
        "Awalnya aku ragu untuk konseling, tapi setelah sesi pertama aku langsung merasa didengarkan. Psikolognya sangat empatik dan nggak menghakimi sama sekali. Sekarang aku lebih paham cara mengelola kecemasanku.",
      rating: 5,
      verified: true,
      emotion: { before: "Cemas", after: "Tenang" },
      color: "bg-blue-500",
    },
    {
      name: "R., 29 tahun",
      role: "Karyawan",
      initial: "R",
      content:
        "Kata Hati membantu aku melewati masa-masa sulit di kantor. Sesi online-nya sangat fleksibel dan privat. Aku merasa lebih tenang dan punya tools untuk menghadapi stres kerja.",
      rating: 5,
      verified: true,
      emotion: { before: "Stres", after: "Fokus" },
      color: "bg-teal-500",
    },
    {
      name: "A., 24 tahun",
      role: "Fresh Graduate",
      initial: "A",
      content:
        "Overthinking dan anxiety-ku berkurang drastis setelah beberapa sesi. Aku belajar banyak tentang diri sendiri dan cara berpikir yang lebih sehat. Terima kasih Kata Hati!",
      rating: 5,
      verified: true,
      emotion: { before: "Overthinking", after: "Jernih" },
      color: "bg-purple-500",
    },
    {
      name: "M., 32 tahun",
      role: "Orang Tua Muda",
      initial: "M",
      content:
        "Konseling pasangan di Kata Hati sangat membantu hubungan kami. Komunikasi jadi lebih baik dan kami belajar cara menyelesaikan konflik dengan lebih dewasa.",
      rating: 5,
      verified: true,
      emotion: { before: "Konflik", after: "Harmonis" },
      color: "bg-pink-500",
    },
    {
      name: "D., 19 tahun",
      role: "Mahasiswa",
      initial: "D",
      content:
        "Aku yang pemalu dan introvert merasa sangat nyaman di sini. Psikolognya sabar dan bikin aku merasa aman untuk terbuka. Highly recommended!",
      rating: 5,
      verified: true,
      emotion: { before: "Tertutup", after: "Terbuka" },
      color: "bg-green-500",
    },
    {
      name: "L., 27 tahun",
      role: "Freelancer",
      initial: "L",
      content:
        "Proses booking mudah, jadwal fleksibel, dan yang paling penting: aku merasa dipahami. Kata Hati bener-bener jadi ruang aman buat aku.",
      rating: 5,
      verified: true,
      emotion: { before: "Sendiri", after: "Dipahami" },
      color: "bg-orange-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll untuk mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimoni" className="py-10 sm:py-12 lg:py-24 bg-gradient-to-b from-white to-primary/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Testimoni Klien
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Cerita dari mereka yang telah merasakan manfaat konseling bersama Kata
            Hati
          </p>
          
          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <BadgeCheck className="w-5 h-5 text-teal-500" />
            <span className="text-sm font-medium text-foreground">
              Semua testimoni terverifikasi dari klien asli
            </span>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden group"
            >
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-teal-500 text-white text-xs font-medium shadow-lg">
                    <BadgeCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              )}

              <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4 px-4 sm:px-6">
                {/* Avatar + Name */}
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md`}>
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Emotion Progress */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-muted-foreground">{testimonial.emotion.before}</span>
                      <TrendingUp className="w-3 h-3 text-teal-500" />
                      <span className="font-semibold text-teal-600">{testimonial.emotion.after}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <Card className="shadow-xl transition-all duration-500 border-2 relative overflow-hidden">
            {/* Verified Badge */}
            {testimonials[currentIndex].verified && (
              <div className="absolute top-3 right-3 z-10">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-teal-500 text-white text-xs font-medium shadow-lg">
                  <BadgeCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            )}

            <CardContent className="pt-5 space-y-3 px-4">
              {/* Avatar + Name */}
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonials[currentIndex].color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md`}>
                  {testimonials[currentIndex].initial}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xs text-muted-foreground leading-relaxed italic min-h-[80px] transition-opacity duration-500">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Emotion Progress */}
              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">{testimonials[currentIndex].emotion.before}</span>
                    <TrendingUp className="w-3 h-3 text-teal-500" />
                    <span className="font-semibold text-teal-600">{testimonials[currentIndex].emotion.after}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
