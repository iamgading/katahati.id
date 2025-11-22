import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Zap, Award } from "lucide-react";

export default function WhyChooseSection() {
  const values = [
    {
      icon: Shield,
      title: "Aman & Rahasia",
      description:
        "Semua yang kamu ceritakan tetap di ruang konseling. Kami menjaga privasi dan kerahasiaan dengan ketat sesuai kode etik psikologi.",
    },
    {
      icon: Heart,
      title: "Pendekatan Empatik",
      description:
        "Kami mendengarkan tanpa menghakimi, fokus memahami kamu dan perasaanmu. Kamu akan merasa didengar dan dipahami.",
    },
    {
      icon: Zap,
      title: "Fleksibel & Nyaman",
      description:
        "Pilih sesi online dari rumah atau tatap muka di klinik. Jadwal yang fleksibel disesuaikan dengan kebutuhanmu.",
    },
    {
      icon: Award,
      title: "Berbasis Ilmu Psikologi",
      description:
        "Ditangani oleh psikolog profesional berlisensi dengan pendekatan ilmiah yang terbukti efektif.",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-24 bg-gradient-to-b from-muted/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Kenapa Memilih Kata Hati?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Kami berkomitmen memberikan layanan konseling terbaik dengan pendekatan
            yang manusiawi dan profesional
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="pt-6 pb-5 sm:pt-8 sm:pb-6 space-y-3 sm:space-y-4 px-3 sm:px-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
