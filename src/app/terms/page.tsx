import { Card } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Syarat & Ketentuan
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
                <h2 className="text-2xl font-bold text-primary mb-4">Pendahuluan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Selamat datang di Kata Hati. Dengan menggunakan layanan konseling psikologi kami, 
                  Anda setuju untuk terikat dengan syarat dan ketentuan berikut. Mohon baca dengan 
                  seksama sebelum menggunakan layanan kami.
                </p>
              </div>

              {/* Service Agreement */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Perjanjian Layanan
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">1. Ruang Lingkup Layanan</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kata Hati menyediakan layanan konseling psikologi profesional</li>
                      <li>Layanan dapat dilakukan secara online (video call) atau offline (tatap muka)</li>
                      <li>Setiap sesi berlangsung selama 60 menit kecuali disepakati lain</li>
                      <li>Psikolog kami terdaftar dan tersertifikasi oleh HIMPSI</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">2. Kelayakan Klien</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Klien harus berusia minimal 17 tahun atau didampingi wali</li>
                      <li>Klien harus memberikan informasi yang akurat dan lengkap</li>
                      <li>Klien harus dalam kondisi sadar dan mampu berkomunikasi</li>
                      <li>Layanan tidak menggantikan perawatan medis darurat</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Booking & Payment */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Booking & Pembayaran</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Prosedur Booking</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Booking dapat dilakukan melalui website atau WhatsApp</li>
                      <li>Konfirmasi jadwal akan dikirim maksimal 24 jam setelah booking</li>
                      <li>Klien wajib hadir tepat waktu sesuai jadwal yang disepakati</li>
                      <li>Keterlambatan lebih dari 15 menit dapat mengurangi waktu sesi</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Kebijakan Pembayaran</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Pembayaran dilakukan sebelum sesi dimulai</li>
                      <li>Metode pembayaran: Transfer bank atau e-wallet</li>
                      <li>Tarif yang berlaku sesuai dengan jenis layanan yang dipilih</li>
                      <li>Bukti pembayaran harus dikirimkan untuk konfirmasi</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  Kebijakan Pembatalan & Reschedule
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-semibold text-yellow-800 mb-2">Pembatalan oleh Klien:</p>
                    <ul className="list-disc pl-6 space-y-1 text-yellow-700">
                      <li><strong>Lebih dari 24 jam:</strong> Refund 100% atau reschedule gratis</li>
                      <li><strong>12-24 jam:</strong> Refund 50% atau reschedule dengan biaya admin Rp 50.000</li>
                      <li><strong>Kurang dari 12 jam:</strong> Tidak ada refund, reschedule dengan biaya penuh</li>
                      <li><strong>No-show:</strong> Tidak ada refund atau reschedule</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-semibold text-green-800 mb-2">Pembatalan oleh Psikolog:</p>
                    <ul className="list-disc pl-6 space-y-1 text-green-700">
                      <li>Refund 100% atau reschedule gratis tanpa biaya tambahan</li>
                      <li>Klien akan dihubungi sesegera mungkin</li>
                      <li>Alternatif jadwal akan ditawarkan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Tanggung Jawab Klien</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Sebagai klien, Anda bertanggung jawab untuk:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Memberikan informasi yang jujur dan akurat</li>
                    <li>Hadir tepat waktu untuk sesi yang dijadwalkan</li>
                    <li>Menjaga kerahasiaan informasi psikolog dan klien lain</li>
                    <li>Mengikuti rekomendasi dan tugas yang diberikan psikolog</li>
                    <li>Memberi tahu psikolog jika ada perubahan kondisi kesehatan</li>
                    <li>Tidak merekam sesi tanpa izin tertulis</li>
                    <li>Bersikap sopan dan menghormati psikolog</li>
                  </ul>
                </div>
              </div>

              {/* Psychologist Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Tanggung Jawab Psikolog</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Psikolog kami berkomitmen untuk:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Menjaga kerahasiaan informasi klien</li>
                    <li>Memberikan layanan profesional sesuai kode etik</li>
                    <li>Hadir tepat waktu dan siap untuk sesi</li>
                    <li>Memberikan lingkungan yang aman dan tidak menghakimi</li>
                    <li>Merujuk ke profesional lain jika diperlukan</li>
                    <li>Terus mengembangkan kompetensi profesional</li>
                  </ul>
                </div>
              </div>

              {/* Limitations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Batasan Layanan
                </h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">Layanan kami TIDAK menangani:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Kondisi psikiatris akut yang memerlukan rawat inap</li>
                    <li>Krisis bunuh diri aktif (segera hubungi 119 atau IGD terdekat)</li>
                    <li>Kasus yang memerlukan intervensi medis segera</li>
                    <li>Penyalahgunaan zat berat yang memerlukan detoksifikasi</li>
                  </ul>
                  <p className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 rounded text-red-700">
                    <strong>Penting:</strong> Jika Anda mengalami krisis mental atau pikiran untuk menyakiti 
                    diri sendiri/orang lain, segera hubungi layanan darurat atau IGD terdekat.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Kerahasiaan</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Semua informasi yang dibagikan dalam sesi konseling bersifat rahasia dan dilindungi 
                  sesuai kode etik psikologi. Pengecualian kerahasiaan hanya berlaku dalam kondisi:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Risiko bahaya serius terhadap diri sendiri atau orang lain</li>
                  <li>Kasus pelecehan anak atau kelompok rentan</li>
                  <li>Perintah pengadilan yang sah</li>
                  <li>Persetujuan tertulis dari klien</li>
                </ul>
              </div>

              {/* Liability */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Batasan Tanggung Jawab</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>Kata Hati tidak bertanggung jawab atas:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Keputusan yang diambil klien di luar sesi konseling</li>
                    <li>Gangguan teknis pada sesi online (internet, listrik, dll)</li>
                    <li>Kerugian akibat informasi yang tidak akurat dari klien</li>
                    <li>Hasil konseling yang tidak sesuai ekspektasi klien</li>
                  </ul>
                  <p className="mt-4">
                    Konseling adalah proses kolaboratif. Hasil bergantung pada komitmen dan 
                    partisipasi aktif klien dalam proses terapi.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Perubahan Syarat & Ketentuan</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan signifikan 
                  akan dikomunikasikan melalui email atau website. Penggunaan layanan setelah 
                  perubahan berarti Anda menyetujui syarat yang diperbarui.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Hubungi Kami</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                  <p className="text-foreground"><strong>Email:</strong> hello@katahati.id</p>
                  <p className="text-foreground"><strong>WhatsApp:</strong> +62 896 5406 1718</p>
                  <p className="text-foreground"><strong>Lokasi:</strong> Jepara, Jawa Tengah</p>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-primary/10 p-6 rounded-lg border-2 border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Persetujuan</h3>
                <p className="text-sm text-muted-foreground">
                  Dengan menggunakan layanan Kata Hati, Anda menyatakan bahwa Anda telah membaca, 
                  memahami, dan menyetujui semua syarat dan ketentuan yang tercantum di atas. 
                  Anda juga menyetujui <Link href="/privacy" className="text-primary hover:underline">Kebijakan Privasi</Link> kami.
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
