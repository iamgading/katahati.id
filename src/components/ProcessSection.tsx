import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, Video, RefreshCw, Star, Clock, Users } from "lucide-react";
import Link from "next/link";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Hubungi Kami",
      description:
        "Isi form atau chat via WhatsApp, ceritakan kebutuhanmu secara singkat. Kami siap mendengarkan.",
      duration: "< 5 menit"
    },
    {
      number: "02",
      icon: Calendar,
      title: "Pilih Jadwal & Layanan",
      description:
        "Kami bantu sesuaikan jadwal dan jenis layanan yang paling cocok dengan kondisi dan kebutuhanmu.",
      duration: "Fleksibel"
    },
    {
      number: "03",
      icon: Video,
      title: "Mulai Sesi Konseling",
      description:
        "Sesi dilakukan online/offline sesuai pilihanmu. Durasi 60 menit dalam suasana aman dan nyaman.",
      duration: "60 menit"
    },
    {
      number: "04",
      icon: RefreshCw,
      title: "Pendampingan Lanjutan",
      description:
        "Jika dibutuhkan, kami sarankan sesi lanjutan atau follow-up untuk hasil yang lebih optimal.",
      duration: "Opsional"
    },
  ];

  return (
    <section id="proses" className="py-10 sm:py-12 lg:py-24 scroll-mt-16 bg-gradient-to-br from-primary/5 via-white to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Proses Konseling
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Proses yang mudah dan transparan, sehingga kamu nggak perlu bingung atau
            takut untuk memulai
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line - hidden on mobile, shown on larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}

                <div className="relative space-y-3 sm:space-y-4">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white font-bold text-base sm:text-lg shadow-lg shadow-primary/25">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground mb-1 sm:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug mb-2">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Proof Card */}
        <Card className="mb-8 sm:mb-10 p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 border-2 border-white flex items-center justify-center"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              ))}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground">
                <span className="font-bold">200+ klien</span> sudah merasakan perubahan positif melalui proses konseling kami
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <Button
            asChild
            size="lg"
            className="bg-primary shadow-lg shadow-primary/25 btn-primary-hover text-white h-12 sm:h-14 px-8"
          >
            <Link href="#booking">
              <div className="flex flex-col items-center">
                <span className="text-base sm:text-lg font-bold">Booking Sesi</span>
                <span className="text-xs opacity-90">Respons dalam 2 jam</span>
              </div>
            </Link>
          </Button>
          
          {/* Urgency Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 border border-red-200">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-red-700 font-semibold">Hanya 3 slot tersisa</span>
            </div>
            <span className="text-muted-foreground">minggu ini</span>
          </div>
        </div>
      </div>
    </section>
  );
}
