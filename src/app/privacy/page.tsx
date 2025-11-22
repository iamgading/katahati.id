import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Terakhir diperbarui: 21 November 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="prose prose-slate max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6" />
                  Komitmen Kami
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Di Kata Hati, kami sangat menghargai privasi dan kerahasiaan Anda. 
                  Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  dan melindungi informasi pribadi Anda sesuai dengan kode etik psikologi Indonesia 
                  dan peraturan perlindungan data yang berlaku.
                </p>
              </div>

              {/* Data Collection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Informasi yang Kami Kumpulkan
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">1. Informasi Pribadi</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon/WhatsApp</li>
                      <li>Usia dan tanggal lahir</li>
                      <li>Informasi demografis dasar</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">2. Informasi Klinis</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Riwayat kesehatan mental</li>
                      <li>Catatan sesi konseling</li>
                      <li>Hasil asesmen psikologis</li>
                      <li>Informasi yang Anda bagikan selama sesi</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3. Informasi Teknis</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Alamat IP</li>
                      <li>Jenis browser dan perangkat</li>
                      <li>Data penggunaan website</li>
                      <li>Cookie dan teknologi pelacakan serupa</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6" />
                  Bagaimana Kami Menggunakan Informasi Anda
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menyediakan layanan konseling psikologi yang efektif</li>
                    <li>Mengelola jadwal dan komunikasi sesi</li>
                    <li>Memproses pembayaran dan administrasi</li>
                    <li>Meningkatkan kualitas layanan kami</li>
                    <li>Mengirimkan informasi penting terkait layanan</li>
                    <li>Mematuhi kewajiban hukum dan profesional</li>
                  </ul>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Perlindungan Data</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Kami menerapkan langkah-langkah keamanan yang ketat:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enkripsi data end-to-end untuk komunikasi online</li>
                    <li>Penyimpanan data yang aman dan terenkripsi</li>
                    <li>Akses terbatas hanya untuk personel yang berwenang</li>
                    <li>Backup data secara berkala</li>
                    <li>Audit keamanan rutin</li>
                  </ul>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Kerahasiaan Profesional</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Sesuai dengan kode etik psikologi, semua informasi yang Anda bagikan 
                    dalam sesi konseling bersifat <strong className="text-foreground">rahasia</strong>. 
                    Kami tidak akan membagikan informasi Anda kepada pihak ketiga tanpa persetujuan 
                    tertulis Anda, kecuali dalam kondisi berikut:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Terdapat risiko bahaya serius terhadap diri sendiri atau orang lain</li>
                    <li>Diwajibkan oleh hukum atau perintah pengadilan</li>
                    <li>Untuk keperluan supervisi profesional (dengan identitas yang dirahasiakan)</li>
                    <li>Dalam kasus pelecehan anak atau kelompok rentan</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Hak Anda</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Anda memiliki hak untuk:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mengakses data pribadi Anda</li>
                    <li>Meminta koreksi data yang tidak akurat</li>
                    <li>Meminta penghapusan data (dengan batasan tertentu)</li>
                    <li>Menarik persetujuan penggunaan data</li>
                    <li>Meminta salinan catatan konseling Anda</li>
                    <li>Mengajukan keluhan terkait penanganan data</li>
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Penyimpanan Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami menyimpan catatan klinis Anda selama <strong className="text-foreground">5 tahun</strong> setelah 
                  sesi terakhir, sesuai dengan standar praktik psikologi profesional. 
                  Setelah periode ini, data akan dihapus secara aman kecuali diperlukan 
                  untuk tujuan hukum atau dengan persetujuan Anda.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin 
                  menggunakan hak Anda terkait data pribadi, silakan hubungi kami:
                </p>
                <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> hello@katahati.id</p>
                  <p className="text-foreground"><strong>WhatsApp:</strong> +62 896 5406 1718</p>
                  <p className="text-foreground"><strong>Lokasi:</strong> Jepara, Jawa Tengah</p>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Pembaruan Kebijakan</h3>
                <p className="text-sm text-muted-foreground">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                  Perubahan signifikan akan kami komunikasikan melalui email atau 
                  pemberitahuan di website. Penggunaan layanan kami setelah perubahan 
                  berarti Anda menyetujui kebijakan yang diperbarui.
                </p>
              </div>
            </div>
          </Card>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
