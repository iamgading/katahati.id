import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kata Hati - Ruang Aman untuk Konseling Psikologi",
  description: "Kata Hati menyediakan layanan konseling psikologi online & tatap muka untuk membantu kamu mengelola cemas, stres, dan overthinking dengan pendampingan profesional berlisensi.",
  keywords: ["konseling psikologi", "psikolog", "mental health", "konseling online", "terapi", "anxiety", "stress"],
  openGraph: {
    title: "Kata Hati - Ruang Aman untuk Konseling Psikologi",
    description: "Ruang aman untuk mendengarkan kata hati kamu. Konseling psikologi profesional, empati, dan terpercaya.",
    type: "website",
    locale: 'id_ID',
    siteName: 'Kata Hati',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kata Hati - Ruang Aman untuk Konseling Psikologi",
    description: "Ruang aman untuk mendengarkan kata hati kamu. Konseling psikologi profesional, empati, dan terpercaya.",
  },
  metadataBase: new URL('https://katahati.id'),
  alternates: {
    canonical: '/',
  },
};

import ScrollReveal from "@/components/ScrollReveal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
