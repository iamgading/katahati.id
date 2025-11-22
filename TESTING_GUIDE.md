# 🧪 COMPREHENSIVE TESTING GUIDE - Kata Hati Website

## Testing Checklist - Step by Step

### **1. VISUAL & BRANDING** 🎨

#### Favicon
- [ ] Buka http://localhost:3000
- [ ] Check browser tab - harus ada **teal heart icon** (bukan logo Vercel)
- [ ] Hard refresh jika masih Vercel: `Ctrl + Shift + R`

#### Color Consistency
- [ ] Semua button primary: **teal background** dengan hover effect
- [ ] Semua button secondary: **teal border** → hover jadi teal background
- [ ] Heart icon di hero: **teal color**
- [ ] Floating WhatsApp: **teal color**

---

### **2. HERO SECTION** 🏠

#### Animated Counter
- [ ] Scroll ke hero section
- [ ] Counter harus **animasi dari 0** ke angka target:
  - 200+ Klien Puas
  - 5+ Tahun Pengalaman  
  - 24 Jam Response Time
- [ ] Animasi smooth (tidak langsung jump)

#### Buttons
- [ ] Klik "Mulai Konseling Sekarang" → scroll ke booking section
- [ ] Klik "Chat via WhatsApp" → buka WhatsApp dengan message
- [ ] Hover effect: teal background muncul smooth

#### Brand Display
- [ ] Di kotak ilustrasi: "Kata Hati" text besar + heart icon teal
- [ ] Tidak ada teks "Dengan Empati" lagi

---

### **3. FLOATING ELEMENTS** 💬

#### Floating WhatsApp
- [ ] Scroll down > 300px → button muncul (bottom-right)
- [ ] Hover → tooltip muncul dengan:
  - Context message (berubah sesuai section)
  - "Sedang online - Respon dalam 2 jam"
  - Dot teal (bukan emoji hijau)
  - Button "Chat Sekarang"
- [ ] Button "Chat Sekarang": 
  - Default: outline teal
  - Hover: background teal + text putih
- [ ] Klik button → buka WhatsApp

#### Back to Top Button
- [ ] Scroll down > 400px → button 🔝 muncul (bottom-left)
- [ ] Klik button → smooth scroll ke atas
- [ ] Button teal color
- [ ] Tidak bentrok dengan floating WA

---

### **4. BOOKING FORM** 📝

#### Multi-Step Flow
**Step 1: Pilih Keluhan**
- [ ] Pilih salah satu concern (emoji buttons)
- [ ] Button "Lanjut" aktif setelah pilih
- [ ] Klik "Lanjut" → ke Step 2

**Step 2: Data Pribadi**
- [ ] Test validasi NAMA:
  - Kosongkan nama → klik "Lanjut" → error: "Nama wajib diisi"
  - Isi "A" → error: "Nama minimal 2 karakter"
  - Border input jadi **merah** saat error
  - Error message muncul di bawah input
- [ ] Test validasi USIA:
  - Kosongkan usia → error: "Usia wajib diisi"
  - Isi "5" → error: "Usia harus antara 13-100 tahun"
  - Isi "150" → error sama
  - Border input jadi **merah** saat error
- [ ] Isi data valid → klik "Lanjut" → ke Step 3

**Step 3: Pilih Sesi**
- [ ] Pilih tipe sesi (Online/Offline/dll)
- [ ] Klik "Lanjut" → ke Step 4

**Step 4: Review & Submit**
- [ ] Review semua data
- [ ] Klik "Booking via WhatsApp"
- [ ] **Loading state** muncul:
  - Button disabled
  - Text berubah: "Mengirim..."
  - Spinner animasi muncul 🔄
- [ ] WhatsApp terbuka (500ms delay)
- [ ] **Success message** muncul:
  - Background hijau
  - Text: "✅ Berhasil! WhatsApp akan terbuka..."
  - Auto-hide setelah 3 detik

#### Navigation
- [ ] Button "Kembali" di Step 2-4:
  - Outline teal
  - Hover: background teal + text putih
- [ ] Button "Lanjut":
  - Teal background
  - Shadow effect
  - Hover: lebih terang

---

### **5. DARK MODE** 🌙

- [ ] Klik toggle dark mode di navbar
- [ ] Check semua section:
  - Background berubah gelap
  - Text tetap readable (putih/abu terang)
  - Tooltip floating WA: text putih
  - Form inputs: background gelap
  - Cards: background gelap
- [ ] Success message: background hijau gelap + text terang
- [ ] Error message: border merah + text merah terang

---

### **6. RESPONSIVE DESIGN** 📱

#### Mobile (< 640px)
- [ ] Resize browser ke mobile width
- [ ] Navbar: hamburger menu muncul
- [ ] Hero: text center, buttons full width
- [ ] Statistics: stack vertical
- [ ] Form: full width, spacing bagus
- [ ] Floating WA & Back to Top: tidak overlap

#### Tablet (640px - 1024px)
- [ ] Layout 2 kolom untuk cards
- [ ] Spacing proporsional
- [ ] Buttons ukuran medium

#### Desktop (> 1024px)
- [ ] Layout 3 kolom
- [ ] Max-width container
- [ ] Spacing optimal

---

### **7. SERVICES SECTION** 🛠️

#### Comparison Feature
- [ ] Klik "📊 Bandingkan Layanan"
- [ ] Modal/section terbuka
- [ ] Table responsive
- [ ] Button "Chat for Free Consultation":
  - Outline teal
  - Hover: background teal

---

### **8. FAQ SECTION** ❓

#### Search
- [ ] Ketik di search bar
- [ ] FAQ filter sesuai keyword
- [ ] Jika tidak ada hasil: "Tidak ada hasil untuk..."
- [ ] Button "Reset Pencarian" muncul

#### Buttons
- [ ] "Lihat X pertanyaan lainnya" (jika > 5 FAQ)
- [ ] "Chat via WhatsApp" di bottom:
  - Outline teal
  - Hover: background teal

---

### **9. PERFORMANCE** ⚡

- [ ] Page load < 3 detik
- [ ] Smooth scrolling
- [ ] Animasi tidak lag
- [ ] No console errors (F12 → Console)
- [ ] No hydration warnings

---

### **10. SEO & META TAGS** 📊

- [ ] View page source: `Ctrl + U`
- [ ] Check ada:
  - `<title>Kata Hati - Ruang Aman untuk Konseling Psikologi</title>`
  - `<meta name="description"...>`
  - `<meta property="og:title"...>`
  - `<meta name="twitter:card"...>`

---

## ✅ TESTING RESULT

**If all checked → READY TO DEPLOY! 🚀**
