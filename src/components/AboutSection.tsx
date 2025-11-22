import { Card } from "@/components/ui/card";
import { Award, Users, Heart, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    {
      icon: Award,
      text: "Psikolog berlisensi dengan pengalaman 5+ tahun menangani kecemasan, depresi, dan stres",
    },
    {
      icon: Users,
      text: "200+ klien sudah merasakan perubahan positif dalam hidup mereka",
    },
    {
      icon: Heart,
      text: "Menggunakan CBT, mindfulness, dan pendekatan humanistik yang terbukti efektif",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Klien Terbantu",
      color: "text-primary"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating Klien",
      color: "text-yellow-600"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Tingkat Kepuasan",
      color: "text-green-600"
    }
  ];

  return (
    <section id="tentang" className="py-10 sm:py-12 lg:py-24 scroll-mt-16 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative px-4 sm:px-0">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              {/* Psychologist photo */}
              <Image 
                src="/gs.jpg" 
                alt="Gading Satrio - Psikolog Kata Hati" 
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-border max-w-[200px] sm:max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-primary/20">
                  {/* HIMPSI Logo */}
                  <Image 
                    src="/himpsi.jpg" 
                    alt="HIMPSI Logo" 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Terdaftar</p>
                  <p className="text-sm font-bold text-foreground">HIMPSI</p>
                  <p className="text-[10px] text-muted-foreground">Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-5 sm:space-y-6 mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Tentang Kata Hati
            </h2>

            {/* Quote */}
            <blockquote className="text-base sm:text-lg text-muted-foreground italic border-l-4 border-primary pl-4 mb-4 sm:mb-6">
              "Setiap orang berhak merasa didengarkan dan dipahami tanpa takut dihakimi."
              <footer className="text-xs sm:text-sm text-foreground mt-2 not-italic">
                — <span className="font-semibold">Gading Satrio</span>, M.Psi., Psikolog
              </footer>
            </blockquote>

            {/* Highlights */}
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="p-3 sm:p-4 bg-white border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
                  >
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-1.5 ${stat.color}`} />
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-0.5">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Certification Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-primary/20">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="text-xs sm:text-sm text-foreground">
                <span className="font-semibold">Terdaftar & Tersertifikasi</span>{" "}
                oleh Himpunan Psikologi Indonesia (HIMPSI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
