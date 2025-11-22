import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export default function ArticlesSection() {
  const articles = [
    {
      title: "Mengenal Burnout: Ciri-Ciri dan Cara Mengatasinya",
      excerpt:
        "Burnout adalah kondisi kelelahan mental dan fisik akibat stres kerja. Kenali ciri-cirinya dan pelajari cara mengatasinya dengan tepat.",
      readTime: "7 menit",
      category: "Mental Health",
      date: "21 Nov 2024",
      featured: true,
      slug: "/artikel/mengenal-burnout"
    },
    {
      title: "Kesehatan Mental Remaja Indonesia: Tantangan dan Solusi",
      excerpt:
        "34,9% remaja Indonesia mengalami masalah kesehatan mental. Pahami tantangan yang dihadapi dan solusi yang dapat dilakukan.",
      readTime: "8 menit",
      category: "Mental Health",
      date: "21 Nov 2024",
      featured: false,
      slug: "/artikel/kesehatan-mental-remaja"
    },
    {
      title: "Mengatasi Stres di Tempat Kerja: Panduan Praktis",
      excerpt:
        "Stres kerja bisa berdampak pada kesehatan. Pelajari cara praktis mengelola stres dan menjaga keseimbangan hidup Anda.",
      readTime: "6 menit",
      category: "Self-Care",
      date: "21 Nov 2024",
      featured: false,
      slug: "/artikel/mengatasi-stres-kerja"
    },
  ];

  return (
    <section id="artikel" className="py-10 sm:py-12 lg:py-24 scroll-mt-16 bg-gradient-to-b from-muted/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Artikel & Insight
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Baca artikel seputar kesehatan mental dan tips praktis untuk kehidupan
            sehari-hari
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.slug} className="block">
              <Card
                className={`group hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden h-full ${
                  article.featured ? 'border-2 border-primary/30' : ''
                }`}
              >
                <CardContent className="pt-5 sm:pt-6 space-y-3 sm:space-y-4 px-4 sm:px-6 pb-5 sm:pb-6">
                  {/* Image/Icon Area */}
                  <div className="relative w-full h-36 sm:h-44 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center overflow-hidden">
                    {article.featured && (
                      <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg">
                        Featured
                      </div>
                    )}
                    <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 text-primary/60 group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-primary">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="font-medium">{article.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs sm:text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Baca
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 sm:mt-12">
          <Card className="p-5 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                Dapatkan Tips Kesehatan Mental Gratis
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Subscribe newsletter kami dan terima artikel & tips eksklusif setiap minggu
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email kamu"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
                  suppressHydrationWarning
                />
                <Button 
                  className="bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 whitespace-nowrap btn-primary-hover transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
                  suppressHydrationWarning
                >
                  Subscribe Gratis
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                🔒 Privasi terjaga. Tidak ada spam.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
