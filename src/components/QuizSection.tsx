"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function QuizSection() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "Seberapa sering kamu merasa cemas minggu ini?",
    "Seberapa sulit kamu fokus pada tugas sehari-hari?",
    "Seberapa sering kamu merasa lelah secara emosional?",
    "Seberapa sulit kamu tidur atau istirahat dengan nyenyak?",
    "Seberapa sering kamu merasa overwhelmed dengan pikiran negatif?",
  ];

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const total = answers.reduce((sum, val) => sum + (val || 0), 0);
    const average = total / questions.length;

    if (average <= 2) {
      return {
        title: "Kondisi Baik",
        description:
          "Kondisi mental kamu saat ini cukup baik. Tetap jaga kesehatan mentalmu dengan istirahat cukup, olahraga, dan aktivitas yang kamu sukai.",
        color: "text-green-600",
      };
    } else if (average <= 3.5) {
      return {
        title: "Perlu Perhatian",
        description:
          "Kamu mungkin mengalami beberapa tanda stres atau kecemasan. Akan sangat membantu jika kamu mulai memperhatikan kesehatan mentalmu lebih serius.",
        color: "text-yellow-600",
      };
    } else {
      return {
        title: "Disarankan Konsultasi",
        description:
          "Kondisi yang kamu alami menunjukkan tanda-tanda yang perlu ditangani lebih lanjut. Sangat disarankan untuk berkonsultasi dengan psikolog profesional.",
        color: "text-primary",
      };
    }
  };

  const handleSubmit = () => {
    if (answers.length === questions.length) {
      setShowResult(true);
    }
  };

  const result = showResult ? calculateResult() : null;
  const progress = (answers.filter(a => a !== undefined).length / questions.length) * 100;

  return (
    <section id="tes-singkat" className="py-10 sm:py-12 lg:py-24 bg-gradient-to-b from-white to-muted scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" fill="currentColor" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Tes Singkat Kondisi Hati
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2 sm:px-0">
            Jawab 5 pertanyaan sederhana untuk mendapat gambaran umum kondisi
            mentalmu saat ini
          </p>
        </div>

        <Card className="shadow-xl border-primary/20">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-center text-base sm:text-lg lg:text-xl">
              Skala: 1 (Tidak Pernah) - 5 (Sangat Sering)
            </CardTitle>
            
            {/* Progress Bar */}
            {!showResult && (
              <div className="mt-4">
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{answers.filter(a => a !== undefined).length}/{questions.length}</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
            {questions.map((question, index) => (
              <div key={index} className="space-y-3">
                <p className="font-medium text-foreground text-sm sm:text-base">
                  {index + 1}. {question}
                </p>
                
                {/* Mobile: Vertical buttons, Desktop: Horizontal */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 sm:justify-center">
                  {[
                    { value: 1, emoji: "😊", label: "Tidak Pernah" },
                    { value: 2, emoji: "🙂", label: "Jarang" },
                    { value: 3, emoji: "😐", label: "Kadang" },
                    { value: 4, emoji: "😟", label: "Sering" },
                    { value: 5, emoji: "😰", label: "Sangat Sering" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(index, option.value)}
                      suppressHydrationWarning
                      className={`flex items-center justify-center sm:flex-col gap-2 sm:gap-1 p-3 sm:p-2 rounded-lg border-2 font-semibold transition-all ${
                        answers[index] === option.value
                          ? "border-primary bg-primary text-white scale-105"
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      <span className="text-xl sm:text-2xl">{option.emoji}</span>
                      <span className="text-xs sm:text-sm flex-1 sm:flex-none text-left sm:text-center">
                        {option.label}
                      </span>
                      <span className={`text-sm font-bold sm:hidden ${
                        answers[index] === option.value ? "text-white" : "text-primary"
                      }`}>
                        {option.value}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {!showResult && (
              <Button
                onClick={handleSubmit}
                disabled={answers.length !== questions.length}
                className="w-full bg-primary btn-primary-hover h-11 sm:h-12 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 disabled:hover:scale-100 disabled:hover:shadow-lg"
                size="lg"
              >
                Lihat Hasil
              </Button>
            )}

            {showResult && result && (
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                <div className="text-center mb-4">
                  <span className="text-4xl sm:text-5xl">
                    {result.color.includes('green') ? '🎉' : result.color.includes('yellow') ? '💛' : '🤗'}
                  </span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 text-center ${result.color}`}>
                  {result.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 text-center">{result.description}</p>
                <p className="text-xs sm:text-sm text-muted-foreground italic mb-4 bg-white/50 p-3 sm:p-4 rounded-lg">
                  ⚠️ Hasil ini hanya gambaran umum, bukan diagnosis. Kalau kamu
                  ingin membahasnya lebih dalam, kamu bisa konsultasi dengan
                  psikolog Kata Hati.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary btn-primary-hover h-11 sm:h-12 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
                >
                  <a href="#booking">Diskusikan Hasilmu dengan Psikolog</a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
