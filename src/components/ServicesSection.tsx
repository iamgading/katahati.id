import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Home, GraduationCap, Video, MapPin, ArrowRight, Sparkles } from "lucide-react";
import ServicesComparison from "@/components/ServicesComparison";

export default function ServicesSection() {
  const services = [
    {
      icon: User,
      title: "Konseling Individu",
      description:
        "Sesi pribadi untuk membantu kamu mengatasi kecemasan, depresi, stres, dan masalah personal lainnya.",
      tags: ["Online", "Offline"],
      price: "Mulai Rp 250k",
      popular: true,
    },
    {
      icon: Users,
      title: "Konseling Pasangan",
      description:
        "Membantu pasangan membangun komunikasi yang lebih sehat dan menyelesaikan konflik dalam hubungan.",
      tags: ["Online", "Offline"],
      price: "Mulai Rp 400k",
      popular: false,
    },
    {
      icon: Home,
      title: "Konseling Keluarga",
      description:
        "Pendampingan untuk keluarga dalam mengatasi dinamika dan konflik keluarga dengan pendekatan sistemik.",
      tags: ["Offline"],
      price: "Mulai Rp 500k",
      popular: false,
    },
    {
      icon: GraduationCap,
      title: "Konseling Remaja & Mahasiswa",
      description:
        "Khusus untuk remaja dan mahasiswa yang menghadapi tekanan akademik, identitas diri, dan transisi kehidupan.",
      tags: ["Online", "Offline"],
      price: "Mulai Rp 250k",
      popular: true,
    },
    {
      icon: Video,
      title: "Sesi Online",
      description:
        "Konseling jarak jauh melalui Zoom atau Google Meet. Nyaman dari rumah, tetap profesional dan rahasia.",
      tags: ["Hybrid"],
      price: "Mulai Rp 250k",
      popular: false,
    },
    {
      icon: MapPin,
      title: "Sesi Tatap Muka",
      description:
        "Konseling langsung di klinik kami dengan suasana yang nyaman, aman, dan privat.",
      tags: ["Offline"],
      price: "Mulai Rp 300k",
      popular: false,
    },
  ];

  return (
    <section id="layanan" className="py-10 sm:py-12 lg:py-24 scroll-mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Layanan Konseling
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Kami menyediakan berbagai jenis layanan konseling yang disesuaikan
            dengan kebutuhanmu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group card-hover overflow-hidden relative border-2 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      <span>Populer</span>
                    </div>
                  </div>
                )}

                <CardContent className="p-5 sm:p-6 space-y-4">
                  {/* Icon & Title */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-snug">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border"></div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Harga</p>
                      <p className="text-base sm:text-lg font-bold text-primary">
                        {service.price}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-2 border-primary text-primary btn-secondary-hover"
                    >
                      <a href={`https://wa.me/6289654061718?text=Halo%20Kata%20Hati%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer">
                        <span className="mr-1">💬 Chat</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Services Comparison Component */}
        <ServicesComparison />

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Tidak yakin layanan mana yang cocok untukmu?
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary btn-secondary-hover"
            >
              <a href="https://wa.me/6289654061718?text=Halo%20Kata%20Hati%2C%20saya%20ingin%20konsultasi%20layanan%20yang%20cocok%20untuk%20saya">
                💬 Konsultasi Gratis via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
