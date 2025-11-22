"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  HelpCircle, 
  DollarSign, 
  Clock, 
  Shield, 
  Users, 
  Calendar, 
  MessageCircle, 
  Phone,
  Star,
  Zap,
  CheckCircle2,
  Search
} from "lucide-react";

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqs = [
    {
      icon: HelpCircle,
      question: "Kapan saya perlu ke psikolog?",
      answer:
        "Kamu bisa konsultasi ke psikolog ketika merasa kesulitan mengelola emosi, mengalami stres berkepanjangan, sulit tidur, kehilangan motivasi, atau merasa terganggu dalam aktivitas sehari-hari. Tidak perlu menunggu sampai kondisi memburuk—konseling bisa membantu sejak dini.",
    },
    {
      icon: DollarSign,
      question: "Berapa tarif sesi konseling?",
      answer:
        "Tarif konseling kami mulai dari Rp 250.000 per sesi (60 menit) untuk konseling individu. Untuk konseling pasangan atau keluarga, tarif dapat berbeda. Silakan hubungi kami untuk informasi lebih detail dan paket sesi.",
    },
    {
      icon: Clock,
      question: "Berapa lama satu sesi konseling?",
      answer:
        "Satu sesi konseling berlangsung selama 60 menit. Waktu ini cukup untuk membahas isu yang kamu hadapi dengan mendalam namun tetap nyaman. Jika diperlukan, sesi dapat diperpanjang dengan kesepakatan bersama.",
    },
    {
      icon: Shield,
      question: "Apakah data saya aman?",
      answer:
        "Sangat aman. Kami menjunjung tinggi kerahasiaan klien sesuai dengan kode etik psikologi Indonesia. Semua informasi yang kamu bagikan akan dijaga kerahasiaannya dan tidak akan dibagikan kepada pihak manapun tanpa persetujuanmu, kecuali dalam kondisi yang mengancam keselamatan.",
    },
    {
      icon: Users,
      question: "Apakah bisa konseling kalau saya pemalu/introvert?",
      answer:
        "Tentu saja! Banyak klien kami yang introvert atau pemalu. Psikolog kami terlatih untuk menciptakan suasana yang aman dan nyaman, sehingga kamu bisa terbuka dengan tempo yang sesuai untukmu. Tidak ada tekanan untuk langsung bercerita banyak di sesi pertama.",
    },
    {
      icon: Calendar,
      question: "Berapa kali sesi yang dibutuhkan?",
      answer:
        "Jumlah sesi bervariasi tergantung kebutuhan dan kondisi masing-masing individu. Beberapa orang merasa terbantu setelah 3-5 sesi, sementara yang lain membutuhkan pendampingan lebih lama. Psikolog akan mendiskusikan rencana sesi bersamamu.",
    },
    {
      icon: MessageCircle,
      question: "Apa bedanya konseling dengan curhat ke teman?",
      answer:
        "Konseling dilakukan oleh profesional terlatih dengan pendekatan ilmiah untuk membantu kamu memahami akar masalah dan menemukan solusi yang efektif. Psikolog juga menjaga kerahasiaan, objektif, dan tidak menghakimi—berbeda dengan curhat biasa yang mungkin kurang terstruktur.",
    },
    {
      icon: Phone,
      question: "Bagaimana cara booking sesi?",
      answer:
        "Kamu bisa booking melalui form di website ini atau langsung chat via WhatsApp. Setelah itu, kami akan membantu menentukan jadwal yang sesuai dan jenis layanan yang paling cocok dengan kebutuhanmu.",
    },
  ];

  const stats = [
    {
      icon: Star,
      value: "95%",
      label: "Klien Puas",
      color: "text-yellow-600"
    },
    {
      icon: Zap,
      value: "< 24 jam",
      label: "Waktu Respons",
      color: "text-primary"
    },
    {
      icon: CheckCircle2,
      value: "200+",
      label: "Klien Terbantu",
      color: "text-green-600"
    }
  ];

  // Filter FAQs based on search
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 5);

  return (
    <section id="faq" className="py-10 sm:py-12 lg:py-24 pb-24 sm:pb-28 scroll-mt-16 bg-gradient-to-b from-white via-muted/10 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
            <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            FAQ
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                  suppressHydrationWarning
                />
            </div>
            {searchQuery && (
              <p className="text-xs text-muted-foreground mt-2">
                {filteredFaqs.length} hasil ditemukan
              </p>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-3 sm:p-4 text-center bg-white border-border hover:border-primary/30 transition-all hover:shadow-md">
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 ${stat.color}`} />
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-0.5">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </Card>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {visibleFaqs.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-4 sm:px-6 bg-white hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <AccordionTrigger 
                      className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4 gap-3"
                      suppressHydrationWarning
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <span className="flex-1">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-11 sm:pl-12">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Show More Button */}
            {!showAll && filteredFaqs.length > 5 && (
              <div className="text-center mt-6 sm:mt-8">
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 hover:border-primary transition-all"
                  suppressHydrationWarning
                >
                  Lihat {filteredFaqs.length - 5} pertanyaan lainnya
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Tidak ada hasil untuk "{searchQuery}"
            </p>
            <Button
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="mt-4"
              suppressHydrationWarning
            >
              Reset Pencarian
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Card className="p-5 sm:p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <p className="text-sm sm:text-base text-foreground mb-3">
              <span className="font-semibold">Masih ada pertanyaan?</span> Kami siap membantu!
            </p>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary btn-secondary-hover"
              suppressHydrationWarning
            >
              <a href="https://wa.me/6289654061718?text=Halo%20Kata%20Hati%2C%20saya%20punya%20pertanyaan%20tentang%20layanan%20konseling" target="_blank" rel="noopener noreferrer">
                💬 Chat via WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
