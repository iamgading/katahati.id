import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Article data - in real app, this would come from CMS/database
const articles = {
  "mengenal-burnout": {
    title: "Mengenal Burnout: Ciri-Ciri dan Cara Mengatasinya",
    category: "Mental Health",
    date: "21 November 2024",
    author: "Gading Satrio, M.Psi., Psikolog",
    readTime: "7 menit",
    image: "/article-burnout.jpg",
    source: {
      title: "Alodokter",
      url: "https://www.alodokter.com/ciri-ciri-burnout-dan-cara-mengatasinya"
    },
    content: `
      <p class="lead">Pernahkah Anda merasa lelah yang luar biasa, tidak hanya fisik tapi juga emosional, karena pekerjaan? Hati-hati, itu bisa jadi tanda <strong>burnout</strong>.</p>
      
      <p>Burnout bukan sekadar stres biasa. Ini adalah kondisi kelelahan mental dan fisik yang ekstrem akibat stres berkepanjangan di tempat kerja. Jika dibiarkan, burnout bisa berdampak serius pada kesehatan fisik dan mental Anda.</p>

      <h2>Apa itu Burnout?</h2>
      <p>Burnout adalah istilah psikologi untuk menggambarkan kondisi stres kronis di tempat kerja yang belum berhasil dikelola. Siapa saja bisa mengalaminya, terutama jika Anda:</p>
      <ul>
        <li>Sering memaksa diri untuk terus bekerja tanpa istirahat</li>
        <li>Merasa kurang mendapatkan apresiasi dari atasan</li>
        <li>Memiliki beban kerja yang terlalu berat</li>
        <li>Mengerjakan tugas yang monoton dan tidak menantang</li>
      </ul>

      <h2>Ciri-Ciri Anda Mengalami Burnout</h2>

      <h3>1. Hilangnya Semangat dan Kelelahan Ekstrem</h3>
      <p>Tanda paling jelas adalah hilangnya energi. Anda merasa terkuras habis, bahkan sebelum mulai bekerja. Bangun pagi terasa sangat berat, dan membayangkan pekerjaan membuat Anda ingin kembali tidur.</p>

      <h3>2. Menjadi Sinis dan Membenci Pekerjaan</h3>
      <p>Burnout membuat Anda merasa frustrasi. Anda mungkin mulai berpikir, <em>"Apa gunanya semua ini?"</em>. Anda menjadi mudah tersinggung, merasa tidak kompeten, dan perlahan mulai membenci pekerjaan yang dulu mungkin Anda sukai.</p>

      <h3>3. Performa Kerja Menurun Drastis</h3>
      <p>Karena kehilangan minat dan fokus, hasil kerja Anda pun menurun. Anda sulit berkonsentrasi, sering menunda-nunda, dan produktivitas anjlok.</p>

      <h3>4. Mudah Marah dan Sensitif</h3>
      <p>Sumbu emosi Anda menjadi pendek. Hal-hal kecil yang biasanya tidak masalah, kini bisa membuat Anda meledak. Ini sering kali memicu konflik dengan rekan kerja atau bahkan orang di rumah.</p>

      <h3>5. Menarik Diri dari Lingkungan</h3>
      <p>Anda merasa pekerjaan adalah beban hidup yang berat. Akibatnya, Anda enggan bersosialisasi. Anda mungkin menolak ajakan makan siang teman kantor atau langsung pulang dan mengurung diri setelah bekerja.</p>

      <h3>6. Sering Sakit Fisik</h3>
      <p>Stres kronis menurunkan sistem imun. Anda jadi mudah terserang flu, sakit kepala, sakit perut, atau gangguan tidur. Tubuh Anda memberi sinyal bahwa ia butuh istirahat.</p>

      <h2>Langkah Praktis Mengatasi Burnout</h2>

      <h3>1. Buat Skala Prioritas</h3>
      <p>Jangan mencoba mengerjakan semuanya sekaligus. Urutkan pekerjaan dari yang paling mendesak. Fokus pada satu hal di satu waktu agar energi Anda tidak terkuras habis.</p>

      <h3>2. Komunikasikan dengan Atasan</h3>
      <p>Jangan dipendam sendiri. Bicaralah dengan atasan Anda. Katakan dengan jujur bahwa beban kerja saat ini membuat Anda kewalahan. Mintalah solusi, apakah itu delegasi tugas atau penyesuaian deadline.</p>

      <h3>3. Turunkan Ekspektasi pada Diri Sendiri</h3>
      <p>Anda tidak harus sempurna setiap saat. Bersikaplah realistis. Berikan apresiasi pada diri sendiri untuk setiap kemajuan kecil yang Anda buat. <em>Good enough is okay.</em></p>

      <h3>4. Curhat pada Orang Terpercaya</h3>
      <p>Berbagi beban bisa sangat melegakan. Ceritakan apa yang Anda rasakan pada pasangan, sahabat, atau keluarga. Dukungan emosional dari mereka sangat berarti.</p>

      <h3>5. Jaga Keseimbangan Hidup (Work-Life Balance)</h3>
      <p>Saat jam kerja selesai, <strong>berhentilah</strong>. Matikan notifikasi email. Lakukan hal yang Anda sukai—nonton film, main game, atau sekadar rebahan. Otak Anda butuh jeda.</p>

      <h3>6. Perbaiki Gaya Hidup</h3>
      <p>Terdengar klise, tapi sangat ampuh: makan sehat, tidur cukup, dan gerakkan tubuh. Olahraga ringan bisa meningkatkan hormon endorfin yang memperbaiki mood Anda.</p>

      <h2>Kapan Harus ke Profesional?</h2>
      <p>Jika Anda sudah mencoba tips di atas namun perasaan lelah, hampa, dan sedih tidak kunjung hilang, jangan ragu untuk mencari bantuan profesional. Psikolog dapat membantu Anda mengurai masalah dan menemukan strategi coping yang tepat.</p>

      <div class="cta-box">
        <p><strong>Merasa relate dengan ciri-ciri di atas?</strong></p>
        <p>Jangan biarkan burnout merusak hidup Anda. Tim psikolog Kata Hati siap mendengarkan dan membantu Anda bangkit kembali.</p>
        <p class="text-sm mt-2"><em>Sumber: <a href="https://www.alodokter.com/ciri-ciri-burnout-dan-cara-mengatasinya" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Alodokter - Ciri-Ciri Burnout dan Cara Mengatasinya</a></em></p>
      </div>
    `,
    tags: ["Burnout", "Mental Health", "Stres Kerja"],
    relatedArticles: ["kesehatan-mental-remaja", "mengatasi-stres-kerja"]
  },
  "kesehatan-mental-remaja": {
    title: "Kesehatan Mental Remaja Indonesia: Tantangan dan Solusi",
    category: "Mental Health",
    date: "21 November 2024",
    author: "Gading Satrio, M.Psi., Psikolog",
    readTime: "8 menit",
    image: "/article-teen-mental-health.jpg",
    source: {
      title: "WHO & Kementerian Kesehatan RI",
      url: "https://www.kemkes.go.id"
    },
    content: `
      <p class="lead">Menjadi remaja di era digital ini tidak mudah. Data terbaru menunjukkan fakta mengejutkan: <strong>34,9% remaja Indonesia</strong> mengalami masalah kesehatan mental. Apa yang sebenarnya terjadi?</p>

      <h2>Potret Kesehatan Mental Remaja Kita</h2>
      <p>Survei I-NAMHS (Indonesia National Adolescent Mental Health Survey) 2022 mengungkap bahwa sekitar 15,5 juta remaja kita sedang berjuang dengan kesehatan mental mereka. Ini bukan angka yang kecil. Ini bisa jadi anak kita, adik kita, atau teman kita.</p>

      <h2>Masalah yang Paling Sering Muncul</h2>

      <h3>1. Kecemasan (Anxiety)</h3>
      <p>Ini adalah "juara" masalah mental pada remaja. Mereka sering merasa cemas berlebihan tentang:</p>
      <ul>
        <li>Masa depan ("Nanti aku kerja apa ya?")</li>
        <li>Tekanan nilai sekolah</li>
        <li>Penerimaan di lingkungan pertemanan</li>
        <li>Penampilan fisik (body image)</li>
      </ul>

      <h3>2. Depresi</h3>
      <p>Lebih dari sekadar sedih atau galau. Depresi membuat remaja kehilangan minat pada hobi, menarik diri, dan merasa putus asa. Data menunjukkan 61% remaja dengan depresi pernah memiliki pikiran untuk mengakhiri hidup.</p>

      <h3>3. Stres Akademis</h3>
      <p>Tuntutan sekolah yang tinggi, les tambahan, hingga ekspektasi orang tua sering kali menjadi beban berat yang menumpuk di pundak remaja.</p>

      <h2>Kenapa Ini Bisa Terjadi?</h2>

      <h3>Dampak Media Sosial</h3>
      <p>Instagram dan TikTok sering menjadi pedang bermata dua. Di satu sisi menghibur, di sisi lain menciptakan standar hidup yang tidak realistis. <em>"Kenapa hidup dia sempurna banget ya? Kenapa aku enggak?"</em> Pikiran seperti ini memicu rasa tidak percaya diri dan FOMO (Fear of Missing Out).</p>

      <h3>Kurangnya Ruang Aman</h3>
      <p>Banyak remaja merasa tidak punya tempat untuk bercerita. Di rumah takut dimarahi, di sekolah takut di-bully. Akhirnya mereka memendam semuanya sendiri.</p>

      <h3>Stigma "Kurang Iman"</h3>
      <p>Masih banyak anggapan bahwa masalah mental adalah tanda kurang ibadah. Ini membuat remaja takut mencari bantuan karena tidak ingin dihakimi.</p>

      <h2>Apa yang Bisa Kita Lakukan?</h2>

      <h3>Untuk Kamu (Remaja):</h3>
      <ul>
        <li><strong>Validasi perasaanmu.</strong> Tidak apa-apa untuk merasa tidak baik-baik saja.</li>
        <li><strong>Detoks sosmed.</strong> Kurangi waktu scrolling jika itu membuatmu cemas.</li>
        <li><strong>Cari hobi offline.</strong> Olahraga, melukis, atau sekadar jalan-jalan sore.</li>
        <li><strong>Cerita.</strong> Cari satu orang yang kamu percaya untuk berbagi beban.</li>
      </ul>

      <h3>Untuk Orang Tua:</h3>
      <ul>
        <li><strong>Dengarkan, jangan langsung menasihati.</strong> Terkadang anak hanya butuh didengar.</li>
        <li><strong>Perhatikan perubahan perilaku.</strong> Jika anak tiba-tiba pendiam atau nilainya anjlok, ajak bicara baik-baik.</li>
        <li><strong>Jadilah rumah yang aman.</strong> Pastikan anak tahu mereka bisa pulang kepada Anda tanpa takut dihakimi.</li>
      </ul>

      <h2>Tanda Bahaya (Red Flags)</h2>
      <p>Segera cari bantuan profesional jika melihat tanda-tanda ini:</p>
      <ul>
        <li>Perubahan mood yang sangat drastis dan cepat</li>
        <li>Menarik diri sepenuhnya dari lingkungan sosial</li>
        <li>Pola tidur dan makan yang berantakan</li>
        <li>Mulai berbicara tentang kematian atau melukai diri</li>
      </ul>

      <div class="emergency-box">
        <p><strong>⚠️ PENTING:</strong> Jika ada risiko bunuh diri, jangan tunggu. Segera hubungi Hotline 119 atau bawa ke IGD terdekat.</p>
      </div>

      <div class="cta-box">
        <p><strong>Bingung harus cerita ke mana?</strong></p>
        <p>Kata Hati menyediakan ruang aman khusus untuk remaja. Konselor kami ramah, asik diajak ngobrol, dan pastinya rahasia terjamin.</p>
        <p class="text-sm mt-2"><em>Sumber: WHO, Kementerian Kesehatan RI, I-NAMHS 2022, UNICEF</em></p>
      </div>
    `,
    tags: ["Remaja", "Mental Health", "Kesehatan Mental"],
    relatedArticles: ["mengenal-burnout", "mengatasi-stres-kerja"]
  },
  "mengatasi-stres-kerja": {
    title: "Mengatasi Stres di Tempat Kerja: Panduan Praktis",
    category: "Self-Care",
    date: "21 November 2024",
    author: "Gading Satrio, M.Psi., Psikolog",
    readTime: "6 menit",
    image: "/article-work-stress.jpg",
    source: {
      title: "Berbagai Sumber Terpercaya",
      url: "#"
    },
    content: `
      <p class="lead">Deadline menumpuk, bos yang menuntut, rekan kerja yang <em>toxic</em>. Stres kerja itu nyata dan wajar. Tapi jika dibiarkan, ia bisa menggerogoti kesehatan Anda. Yuk, kita bahas cara praktis mengatasinya.</p>

      <h2>Kenali Sinyal Tubuh Anda</h2>
      <p>Seringkali kita mengabaikan sinyal stres sampai tubuh kita "berteriak". Perhatikan tanda-tanda ini:</p>

      <h3>Sinyal Fisik:</h3>
      <ul>
        <li>Sakit kepala tegang (seperti diikat kencang)</li>
        <li>Pundak dan leher kaku</li>
        <li>Susah tidur atau malah tidur terus</li>
        <li>Maag atau gangguan pencernaan sering kambuh</li>
      </ul>

      <h3>Sinyal Emosional:</h3>
      <ul>
        <li>Mudah tersinggung (senggol bacok)</li>
        <li>Merasa cemas setiap minggu sore (Sunday Scaries)</li>
        <li>Kehilangan motivasi kerja</li>
        <li>Sulit fokus saat meeting</li>
      </ul>

      <h2>Strategi "Warass" di Kantor</h2>

      <h3>1. Teknik Pomodoro</h3>
      <p>Otak kita bukan mesin. Cobalah bekerja fokus selama 25 menit, lalu istirahat total 5 menit. Lakukan ini 4 siklus, lalu istirahat panjang. Ini menjaga otak tetap segar dan mencegah kelelahan mental.</p>

      <h3>2. Berani Bilang "Tidak" (atau Negosiasi)</h3>
      <p>Jika piring Anda sudah penuh, jangan terima makanan lagi. Belajarlah menolak dengan sopan atau negosiasi deadline. <em>"Saya bisa kerjakan ini, tapi deadline proyek A harus mundur ya Pak/Bu."</em></p>

      <h3>3. Pisahkan Kehidupan Pribadi</h3>
      <p>Terapkan batas tegas. Jangan bawa laptop ke tempat tidur. Matikan notifikasi grup kantor saat weekend. Waktu istirahat adalah hak Anda untuk me-recharge energi.</p>

      <h3>4. Gerakkan Badan</h3>
      <p>Duduk seharian itu racun. Setiap 1 jam, berdiri dan regangkan badan. Jalan kaki sebentar saat makan siang. Gerakan fisik membantu membuang hormon stres dari tubuh.</p>

      <h3>5. Cari Teman Curhat di Kantor</h3>
      <p>Punya satu saja "work bestie" bisa sangat membantu. Sekadar berbagi keluh kesah ringan saat makan siang bisa mengurangi beban stres secara signifikan.</p>

      <h3>6. Ubah Cara Pandang (Reframing)</h3>
      <p>Fokus pada apa yang bisa Anda kendalikan. Anda tidak bisa mengendalikan mood bos, tapi Anda bisa mengendalikan reaksi Anda. Lihat masalah sebagai tantangan, bukan ancaman.</p>

      <h2>Peran Kantor Itu Penting</h2>
      <p>Ingat, kesehatan mental karyawan adalah aset perusahaan. Perusahaan yang baik harusnya menyediakan lingkungan yang mendukung, bukan yang memeras energi.</p>

      <div class="cta-box">
        <p><strong>Stres kerja mulai mengganggu hidup?</strong></p>
        <p>Jangan tunggu sampai burnout. Konsultasikan strategi manajemen stres Anda bersama psikolog Kata Hati. Produktif itu penting, tapi waras itu utama.</p>
        <p class="text-sm mt-2"><em>Sumber: WHO, Alodokter, Halodoc, dan berbagai sumber terpercaya</em></p>
      </div>
    `,
    tags: ["Stres", "Work-Life Balance", "Kesehatan Mental"],
    relatedArticles: ["mengenal-burnout", "kesehatan-mental-remaja"]
  }
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/#artikel" className="text-primary hover:underline">
            ← Kembali ke Artikel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      {/* Header */}
      <article className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/#artikel" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Artikel
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </header>

          {/* Article Content */}
          <Card className="p-6 sm:p-8 lg:p-10">
            <div 
              className="prose prose-slate max-w-none
                prose-headings:text-primary 
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:my-4 prose-ul:space-y-2
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                [&_.lead]:text-lg [&_.lead]:text-foreground [&_.lead]:font-medium [&_.lead]:mb-6
                [&_.cta-box]:bg-primary/5 [&_.cta-box]:border-l-4 [&_.cta-box]:border-primary [&_.cta-box]:p-6 [&_.cta-box]:rounded-lg [&_.cta-box]:my-8
                [&_.cta-box_p]:text-foreground [&_.cta-box_p]:mb-2
                [&_.emergency-box]:bg-red-50 [&_.emergency-box]:border-l-4 [&_.emergency-box]:border-red-500 [&_.emergency-box]:p-6 [&_.emergency-box]:rounded-lg [&_.emergency-box]:my-8
                [&_.emergency-box_p]:text-red-800 [&_.emergency-box_p]:font-semibold
                [&_.emergency-box_ul]:text-red-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <Card className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">
                Butuh Bantuan Profesional?
              </h3>
              <p className="text-muted-foreground mb-4">
                Tim psikolog Kata Hati siap membantu Anda dengan pendekatan yang empatik dan profesional.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 sm:h-13 text-base sm:text-lg border-2 border-primary text-primary btn-secondary-hover w-full sm:w-auto"
              >
                <Link
                  href="https://wa.me/6289654061718?text=Halo%20Kata%20Hati%2C%20saya%20ingin%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat via WhatsApp
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </article>
    </div>
  );
}
