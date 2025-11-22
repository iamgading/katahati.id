"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    concern: "",
    name: "",
    age: "",
    sessionType: "",
    details: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    age: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalSteps = 4;

  const concerns = [
    { emoji: "😰", label: "Kecemasan & Stress", value: "kecemasan" },
    { emoji: "😔", label: "Depresi & Mood", value: "depresi" },
    { emoji: "💔", label: "Hubungan & Keluarga", value: "hubungan" },
    { emoji: "🎓", label: "Akademik & Karir", value: "akademik" },
    { emoji: "🤔", label: "Identitas Diri", value: "identitas" },
    { emoji: "💭", label: "Lainnya", value: "lainnya" },
  ];

  const sessionTypes = [
    { emoji: "💻", label: "Online (Zoom/GMeet)", value: "online" },
    { emoji: "🏢", label: "Tatap Muka", value: "offline" },
    { emoji: "🤷", label: "Belum Yakin", value: "flexible" },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const concernLabel = concerns.find(c => c.value === formData.concern)?.label || formData.concern;
    const sessionLabel = sessionTypes.find(s => s.value === formData.sessionType)?.label || formData.sessionType;
    
    // Clear any errors first
    setErrors({ name: "", age: "" });
    setIsSubmitting(true);

    const message = `Halo Kata Hati, saya ingin booking sesi konseling.%0A%0ANama: ${formData.name}%0AUsia: ${formData.age}%0AKeluhan: ${concernLabel}%0APreferensi Sesi: ${sessionLabel}%0ADetail: ${formData.details || '-'}`;
    
    // Simulate small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    window.open(
      `https://wa.me/6289654061718?text=${message}`,
      "_blank"
    );

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.concern !== "";
      case 2:
        // Validate name and age
        const newErrors = { name: "", age: "" };
        let isValid = true;

        if (formData.name.trim() === "") {
          newErrors.name = "Nama wajib diisi";
          isValid = false;
        } else if (formData.name.trim().length < 2) {
          newErrors.name = "Nama minimal 2 karakter";
          isValid = false;
        }

        const ageNum = parseInt(formData.age);
        if (formData.age === "") {
          newErrors.age = "Usia wajib diisi";
          isValid = false;
        } else if (isNaN(ageNum) || ageNum < 13 || ageNum > 100) {
          newErrors.age = "Usia harus antara 13-100 tahun";
          isValid = false;
        }

        setErrors(newErrors);
        return isValid;
      case 3:
        return formData.sessionType !== "";
      case 4:
        return true;
      default:
        return false;
    }
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <section id="booking" className="py-10 sm:py-12 lg:py-24 pb-24 sm:pb-28 bg-gradient-to-br from-primary/10 via-muted/30 to-secondary/10 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-2 sm:px-0">
            Hidup nggak harus kamu jalani sendirian.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Kalau kamu siap, Kata Hati siap mendengarkan dan menemani langkahmu.
          </p>
          
          {/* Social Proof & Urgency */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">✓</span>
              <span className="text-muted-foreground"><span className="font-bold text-foreground">200+ klien</span> terbantu</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">⚡</span>
              <span className="text-muted-foreground"><span className="font-bold text-foreground">Respon dalam 2 jam</span></span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">🔒</span>
              <span className="text-muted-foreground"><span className="font-bold text-foreground">100% rahasia</span></span>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl border-primary/20">
          <CardContent className="p-5 sm:p-8 lg:p-12">
            {/* Header with Progress */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Booking Sesi Konseling
                </h3>
                <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full">
                  3 slot tersedia
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-teal-500 transition-all duration-500 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                
                {/* Step Indicators */}
                <div className="flex justify-between mt-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center gap-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        step < currentStep 
                          ? "bg-teal-500 text-white" 
                          : step === currentStep 
                          ? "bg-primary text-white ring-4 ring-primary/20" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {step < currentStep ? <Check className="w-4 h-4" /> : step}
                      </div>
                      <span className="text-xs text-muted-foreground hidden sm:block">
                        {step === 1 && "Keluhan"}
                        {step === 2 && "Data Diri"}
                        {step === 3 && "Preferensi"}
                        {step === 4 && "Detail"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Concern Selection */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Apa yang ingin kamu bahas? 💭
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {concerns.map((concern) => (
                        <button
                          key={concern.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, concern: concern.value })}
                          className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                            formData.concern === concern.value
                              ? "border-primary bg-primary/10 shadow-lg"
                              : "border-border hover:border-primary/50"
                          }`}
                          suppressHydrationWarning
                        >
                          <div className="text-3xl mb-2">{concern.emoji}</div>
                          <div className="text-xs font-medium text-foreground">{concern.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Info */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama kamu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={`h-12 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="age" className="text-sm font-medium text-foreground">
                      Usia
                    </label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Masukkan usia kamu"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      required
                      className={`h-12 ${errors.age ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {errors.age && (
                      <p className="text-xs text-red-500 mt-1">{errors.age}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Session Type */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">
                      Preferensi sesi konseling? 🎯
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {sessionTypes.map((session) => (
                        <button
                          key={session.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, sessionType: session.value })}
                          className={`p-4 rounded-xl border-2 transition-all hover:scale-105 ${
                            formData.sessionType === session.value
                              ? "border-primary bg-primary/10 shadow-lg"
                              : "border-border hover:border-primary/50"
                          }`}
                          suppressHydrationWarning
                        >
                          <div className="text-3xl mb-2">{session.emoji}</div>
                          <div className="text-xs font-medium text-foreground">{session.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Details */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-fade-in-up">
                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-medium text-foreground">
                      Ceritakan lebih detail (opsional)
                    </label>
                    <textarea
                      id="details"
                      placeholder="Contoh: Saya merasa cemas berlebihan dan sulit tidur sejak 2 minggu terakhir..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      rows={5}
                      className="w-full px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                    <p className="font-semibold text-foreground">Ringkasan Booking:</p>
                    <div className="space-y-1 text-muted-foreground">
                      <p>• Nama: <span className="text-foreground font-medium">{formData.name}</span></p>
                      <p>• Usia: <span className="text-foreground font-medium">{formData.age} tahun</span></p>
                      <p>• Keluhan: <span className="text-foreground font-medium">{concerns.find(c => c.value === formData.concern)?.label}</span></p>
                      <p>• Sesi: <span className="text-foreground font-medium">{sessionTypes.find(s => s.value === formData.sessionType)?.label}</span></p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 h-12 border-2 border-primary text-primary btn-secondary-hover"
                    suppressHydrationWarning
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Kembali
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`h-12 bg-primary text-white shadow-lg shadow-primary/25 btn-primary-hover ${currentStep === 1 ? 'w-full' : 'flex-1'}`}
                    suppressHydrationWarning
                  >
                    Lanjut
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 h-12 bg-primary shadow-lg shadow-primary/25 btn-primary-hover text-white"
                    suppressHydrationWarning
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim...</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <span>Booking via WhatsApp</span>
                        <span className="text-xs opacity-90">Respon dalam 2 jam</span>
                      </div>
                    )}
                  </Button>
                )}
              </div>

              {currentStep === 1 && (
                <p className="text-center text-xs sm:text-sm text-muted-foreground">
                  atau{" "}
                  <Link
                    href="https://wa.me/6289654061718?text=Halo,%20saya%20ingin%20tanya-tanya%20dulu"
                    target="_blank"
                    className="text-primary font-medium hover:underline"
                  >
                    tanya-tanya dulu via WhatsApp
                  </Link>
                </p>
              )}

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in-up">
                  <p className="text-sm text-green-800 dark:text-green-200 text-center font-medium">
                    ✅ Berhasil! WhatsApp akan terbuka. Silakan kirim pesan untuk melanjutkan booking.
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Kerahasiaan terjaga</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>Psikolog berlisensi</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span>Respon cepat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
