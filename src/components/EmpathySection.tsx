import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Frown, MessageSquareX, Focus } from "lucide-react";
import Link from "next/link";

export default function EmpathySection() {
  const problems = [
    {
      emoji: "😔",
      text: "Sulit tidur",
      subtitle: "Pikiran nggak bisa off"
    },
    {
      emoji: "😰",
      text: "Cemas berlebihan",
      subtitle: "Takut hal buruk terjadi"
    },
    {
      emoji: "😶",
      text: "Overwhelmed",
      subtitle: "Semua terasa terlalu berat"
    },
    {
      emoji: "💭",
      text: "Overthinking",
      subtitle: "Mikirin hal yang sama terus"
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Apakah kamu sering merasa seperti ini?
          </h2>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-primary">200+ klien</span> sudah merasakan ruang aman untuk bicara
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-4 sm:p-5 bg-white border-border hover:border-primary/50 transition-all duration-300 group card-hover"
            >
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl">{problem.emoji}</div>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-bold text-foreground">
                    {problem.text}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {problem.subtitle}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg text-muted-foreground">
            Kalau iya,{" "}
            <span className="font-semibold text-foreground">
              kamu nggak sendirian
            </span>
            . Minta bantuan bukan berarti kamu lemah.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground italic px-4">
            "Kalau kamu lelah, itu bukan berarti kamu lemah. Itu tanda kamu butuh
            ruang untuk istirahat dan dipahami."
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary btn-secondary-hover"
          >
            <Link href="#layanan">Kenali layanan kami</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
