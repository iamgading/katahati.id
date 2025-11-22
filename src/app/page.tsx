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
import CTASection from "@/components/CTASection";
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
        <div id="booking">
          <CTASection />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      {/* <ScrollToTop /> */}
      {/* <ExitIntentPopup /> */}
    </>
  );
}
