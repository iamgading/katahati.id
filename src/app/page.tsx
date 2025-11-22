import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
// import QuizSection from "@/components/QuizSection"; // Temporarily disabled
import ArticlesSection from "@/components/ArticlesSection";
import FAQSection from "@/components/FAQSection";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
// import ExitIntentPopup from "@/components/ExitIntentPopup"; // Temporarily disabled
// import ScrollToTop from "@/components/ScrollToTop"; // Temporarily disabled

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="tentang">
          <EmpathySection />
          <AboutSection />
        </div>
        <div id="layanan">
          <ServicesSection />
          <WhyChooseSection />
        </div>
        <div id="proses">
          <ProcessSection />
        </div>
        <div id="testimoni">
          <TestimonialsSection />
        </div>
        {/* Temporarily disabled - QuizSection */}
        {/* <div id="tes-singkat">
          <QuizSection />
        </div> */}
        <div id="artikel">
          <ArticlesSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="booking" className="py-20 bg-gradient-to-br from-primary/10 via-muted/30 to-secondary/10 text-center px-4">
          {/* <CTASection /> - Temporarily disabled due to render loop */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Siap untuk Bercerita?</h2>
            <p className="text-lg text-muted-foreground">
              Jangan biarkan masalahmu berlarut. Yuk, ngobrol dengan psikolog kami sekarang.
            </p>
            <a 
              href="https://wa.me/6289654061718?text=Halo%20Kata%20Hati,%20saya%20ingin%20booking%20sesi%20konseling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Booking via WhatsApp Sekarang
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* <ScrollToTop /> */}
      {/* <ExitIntentPopup /> */}
    </>
  );
}
