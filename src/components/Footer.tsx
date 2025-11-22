import { Heart, Mail, MapPin, Instagram, Clock, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Booking", href: "#booking" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Social Proof Banner */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 pb-8 sm:pb-10 border-b border-white/20">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            200+ Klien Terbantu
          </p>
          <p className="text-sm sm:text-base text-white/80">
            Bergabunglah dengan mereka yang sudah menemukan ruang aman untuk bicara
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Heart className="w-6 h-6 text-teal-500" fill="currentColor" />
              </div>
              <span className="text-2xl font-semibold">Kata Hati</span>
            </Link>
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              Ruang aman untuk mendengarkan kata hatimu. Konseling psikologi
              profesional dengan pendekatan yang empatik dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6289654061718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span>📱</span>
                  <span>+62 896 5406 1718</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@katahati.id"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@katahati.id</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jepara, Jawa Tengah</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Jam Operasional</p>
                  <p className="text-xs">Senin - Sabtu: 09.00 - 20.00</p>
                  <p className="text-xs">Minggu: 10.00 - 17.00</p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-sm">Ikuti Kami</h4>
              <div className="flex gap-2">
                <a
                  href="https://instagram.com/katahati.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/katahati.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/katahati.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Etika */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-lg">⚠️</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm sm:text-base mb-1.5 text-white">Disclaimer Penting</h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Kata Hati tidak menangani kondisi gawat darurat. Jika kamu merasa dalam bahaya atau ingin menyakiti diri, 
                  segera hubungi layanan darurat terdekat atau <strong className="text-white">Hotline 119</strong> (Kementerian Kesehatan RI).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-white/70">
              © {currentYear} Kata Hati. Terdaftar & tersertifikasi HIMPSI.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privasi
              </Link>
              <Link
                href="/terms"
                className="text-white/70 hover:text-white transition-colors"
              >
                Syarat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
