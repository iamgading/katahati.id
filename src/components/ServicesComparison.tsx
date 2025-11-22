"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComparisonService {
  name: string;
  price: string;
  features: {
    name: string;
    included: boolean;
  }[];
}

export default function ServicesComparison() {
  const [isOpen, setIsOpen] = useState(false);

  const services: ComparisonService[] = [
    {
      name: "Konseling Individu",
      price: "Rp 250k",
      features: [
        { name: "Sesi 60 menit", included: true },
        { name: "Online/Offline", included: true },
        { name: "Psikolog berlisensi", included: true },
        { name: "Rekam medis digital", included: true },
        { name: "Follow-up via chat", included: true },
        { name: "Untuk 2 orang", included: false },
        { name: "Asesmen keluarga", included: false },
      ],
    },
    {
      name: "Konseling Pasangan",
      price: "Rp 400k",
      features: [
        { name: "Sesi 90 menit", included: true },
        { name: "Online/Offline", included: true },
        { name: "Psikolog berlisensi", included: true },
        { name: "Rekam medis digital", included: true },
        { name: "Follow-up via chat", included: true },
        { name: "Untuk 2 orang", included: true },
        { name: "Asesmen keluarga", included: false },
      ],
    },
    {
      name: "Konseling Keluarga",
      price: "Rp 500k",
      features: [
        { name: "Sesi 120 menit", included: true },
        { name: "Online/Offline", included: false },
        { name: "Psikolog berlisensi", included: true },
        { name: "Rekam medis digital", included: true },
        { name: "Follow-up via chat", included: true },
        { name: "Untuk 2+ orang", included: true },
        { name: "Asesmen keluarga", included: true },
      ],
    },
  ];

  if (!isOpen) {
    return (
      <div className="text-center mt-6">
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="border-2 border-primary text-primary btn-secondary-hover"
          suppressHydrationWarning
        >
          📊 Bandingkan Layanan
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary/20 p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Perbandingan Layanan</h3>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
          suppressHydrationWarning
        >
          Tutup ✕
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-4 px-4 font-semibold text-foreground">Fitur</th>
              {services.map((service, idx) => (
                <th key={idx} className="text-center py-4 px-4">
                  <div className="space-y-1">
                    <p className="font-bold text-primary">{service.name}</p>
                    <p className="text-sm font-semibold text-foreground">{service.price}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services[0].features.map((_, featureIdx) => (
              <tr key={featureIdx} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 text-sm text-foreground font-medium">
                  {services[0].features[featureIdx].name}
                </td>
                {services.map((service, serviceIdx) => (
                  <td key={serviceIdx} className="py-3 px-4 text-center">
                    {service.features[featureIdx].included ? (
                      <Check className="w-5 h-5 text-teal-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {services.map((service, idx) => (
          <div key={idx} className="border-2 border-border rounded-xl p-4 space-y-3">
            <div className="text-center pb-3 border-b border-border">
              <h4 className="font-bold text-primary">{service.name}</h4>
              <p className="text-sm font-semibold text-foreground mt-1">{service.price}</p>
            </div>
            <ul className="space-y-2">
              {service.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center gap-2 text-sm">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  )}
                  <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Masih bingung pilih yang mana?
        </p>
        <Button
          asChild
          className="bg-primary text-white hover:bg-primary/90"
          suppressHydrationWarning
        >
          <a
            href="https://wa.me/6289654061718?text=Halo, saya butuh bantuan memilih layanan yang cocok"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat untuk Konsultasi Gratis
          </a>
        </Button>
      </div>
    </div>
  );
}
