import dynamic from 'next/dynamic';

// Static imports for non-interactive sections
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

// Dynamic imports for interactive components (disable SSR to prevent hydration errors)
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });
const QuizSection = dynamic(() => import("@/components/QuizSection"), { ssr: false });
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), { ssr: false });
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntentPopup"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), { ssr: false });

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
        <div id="tes-singkat">
          <QuizSection />
        </div>
        <div id="artikel">
          <ArticlesSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="booking">
          <CTASection />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <ExitIntentPopup />
    </>
  );
}
