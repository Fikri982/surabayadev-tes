import type { Event } from "@/lib/types";

// Dummy seed data untuk kebutuhan demo.
const seedEvents: Event[] = [
  {
    id: "workshop-nextjs-16",
    title: "Workshop: Next.js 16 & App Router Mendalam",
    description:
      "Sesi hands-on membangun aplikasi dengan App Router dan Server Components di Next.js 16, termasuk kapan sebaiknya memakai Route Handlers.",
    about:
      "Workshop ini cocok buat kamu yang udah familiar sama React dan mau naik level ke Next.js App Router. Kita bakal bareng-bareng bikin aplikasi kecil dari nol, mulai dari struktur folder, Server vs Client Components, sampai kapan sebaiknya pakai Route Handlers ketimbang Server Actions. Bawa laptop sendiri karena sesi ini full praktik.",
    benefits: [
      "Materi & source code contoh project",
      "Sertifikat digital",
      "Sesi tanya jawab langsung dengan fasilitator",
    ],
    speakers: [
      { name: "Raka Wibisono", role: "Frontend Engineer, startup lokal" },
    ],
    price: 75000,
    date: "2026-09-05T09:00:00.000Z",
    location: "Coworking Space Surabaya",
    quota: 40,
    quotaRemaining: 12,
  },
  {
    id: "meetup-devops-ci-cd",
    title: "Meetup: DevOps & CI/CD ala Startup",
    description:
      "Diskusi praktik CI/CD di startup, mulai dari setup GitHub Actions sampai deployment otomatis ke cloud.",
    about:
      "Ngobrol santai bareng praktisi soal gimana tim engineering di startup nyusun pipeline CI/CD sehari-hari. Bakal dibahas studi kasus nyata: dari repo yang deploy manual, sampai akhirnya punya pipeline otomatis yang bikin tidur nyenyak. Ada sesi tanya jawab terbuka di akhir acara.",
    benefits: [
      "Studi kasus pipeline CI/CD nyata",
      "Networking dengan sesama praktisi DevOps",
      "Konsumsi ringan",
    ],
    speakers: [{ name: "Dinda Pramesti", role: "DevOps Engineer" }],
    date: "2026-09-12T13:00:00.000Z",
    location: "Aula Komunitas Tech, Surabaya",
    quota: 60,
    quotaRemaining: 60,
  },
  {
    id: "workshop-typescript-deep-dive",
    title: "Workshop: TypeScript Deep Dive",
    description:
      "Membahas generics, utility types, dan pola type-safe yang biasa dipakai di aplikasi skala besar.",
    about:
      "Cocok buat developer yang udah pakai TypeScript tapi masih sering nulis `any` diam-diam. Kita bedah generics, utility types bawaan TypeScript, dan pola-pola type-safe yang bikin codebase besar tetap gampang di-maintain, lengkap dengan studi kasus dari project nyata.",
    benefits: [
      "Cheat sheet utility types",
      "Studi kasus refactor project nyata",
      "Sertifikat digital",
    ],
    speakers: [{ name: "Salsabila Ayu", role: "Software Engineer" }],
    price: 50000,
    date: "2026-09-27T09:00:00.000Z",
    location: "Creative Hub Surabaya",
    quota: 35,
    quotaRemaining: 3,
  },
  {
    id: "meetup-frontend-state-management",
    title: "Meetup Frontend: State Management di 2026",
    description:
      "Diskusi terbuka membandingkan beberapa pendekatan state management yang umum dipakai di ekosistem React saat ini.",
    about:
      "Sesi diskusi panel santai buat bandingin berbagai pendekatan state management di React — dari yang built-in sampai library pihak ketiga — plus kapan sebaiknya masing-masing dipakai. Terbuka tanya jawab dan sharing pengalaman dari peserta juga.",
    benefits: [
      "Perbandingan pendekatan state management terkini",
      "Networking dengan komunitas frontend",
    ],
    speakers: [
      { name: "Fajar Nugroho", role: "Frontend Engineer" },
      { name: "Clara Anindita", role: "Software Engineer" },
      { name: "Bagas Prasetyo", role: "Moderator", isModerator: true },
    ],
    date: "2026-10-03T13:00:00.000Z",
    location: "Ruang Kolaborasi Digital, Surabaya",
    quota: 50,
    quotaRemaining: 27,
  },
  {
    id: "workshop-golang-backend",
    title: "Workshop: Golang untuk Backend Engineer",
    description:
      "Membangun REST API sederhana dengan Go dari nol, sekaligus membahas struktur project dan testing yang umum dipakai.",
    about:
      "Belajar bikin REST API sederhana pakai Go dari nol — mulai dari setup project, struktur folder yang umum dipakai di komunitas, sampai nulis unit test dasar. Cocok buat yang udah nyaman di bahasa lain dan mau nyoba Go buat kebutuhan backend.",
    benefits: [
      "Boilerplate project Go siap pakai",
      "Materi & rekaman sesi",
      "Sertifikat digital",
    ],
    speakers: [{ name: "Yusuf Ramadhan", role: "Backend Engineer" }],
    date: "2026-10-10T09:00:00.000Z",
    location: "Kampus Mitra, Surabaya",
    quota: 45,
    quotaRemaining: 45,
  },
  {
    id: "meetup-career-talk",
    title: "Meetup: Dari Junior ke Senior Developer",
    description:
      "Panel diskusi bersama beberapa senior engineer seputar jenjang karier, code review, dan soft skill di industri tech.",
    about:
      "Panel diskusi santai bareng beberapa senior engineer seputar jenjang karier di industri tech: gimana caranya naik level dari junior, budaya code review yang sehat, sampai soft skill yang sering dianggap remeh tapi penting banget. Terbuka sesi tanya jawab.",
    benefits: [
      "Insight langsung dari senior engineer",
      "Sesi tanya jawab terbuka",
      "Networking dengan sesama peserta",
    ],
    speakers: [
      { name: "Intan Permatasari", role: "Engineering Lead" },
      { name: "Wahyu Kurniawan", role: "Senior Software Engineer" },
      { name: "Nadia Utami", role: "Moderator", isModerator: true },
    ],
    date: "2026-10-17T13:00:00.000Z",
    location: "Ruang Komunitas, Surabaya",
    quota: 30,
    quotaRemaining: 8,
  },
];

declare global {
  var __events: Event[] | undefined;
}

export const events: Event[] = (globalThis.__events ??= seedEvents);
