import type { Event } from "@/lib/types";

// Dummy seed data untuk kebutuhan demo.
export const events: Event[] = [
  {
    id: "workshop-nextjs-16",
    title: "Workshop: Next.js 16 & App Router Mendalam",
    description:
      "Sesi hands-on membangun aplikasi dengan App Router dan Server Components di Next.js 16, termasuk kapan sebaiknya memakai Route Handlers.",
    date: "2026-09-05T09:00:00.000Z",
    location: "Coworking Space Surabaya",
    quota: 40,
    quotaRemaining: 12,
  },
  {
    id: "meetup-devops-ci-cd",
    title: "Meetup: DevOps & CI/CD ala Startup",
    description:
      "Diskusi praktik CI/CD ala tim startup, mulai dari setup GitHub Actions sampai deployment otomatis ke cloud.",
    date: "2026-09-12T13:00:00.000Z",
    location: "Aula Komunitas Tech, Surabaya",
    quota: 60,
    quotaRemaining: 60,
  },
  {
    id: "hackathon-surabayadev-2026",
    title: "Hackathon SurabayaDev 2026",
    description:
      "Kompetisi membangun produk digital dalam 24 jam untuk menjawab masalah kota, terbuka untuk tim developer, designer, dan product manager.",
    date: "2026-09-20T08:00:00.000Z",
    location: "Gedung Serbaguna Kampus Mitra, Surabaya",
    quota: 100,
    quotaRemaining: 0,
  },
  {
    id: "workshop-typescript-deep-dive",
    title: "Workshop: TypeScript Deep Dive",
    description:
      "Membahas generics, utility types, dan pola type-safe yang biasa dipakai di aplikasi skala besar.",
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
    date: "2026-10-10T09:00:00.000Z",
    location: "Kampus Mitra, Surabaya",
    quota: 45,
    quotaRemaining: 45,
  },
  {
    id: "meetup-career-talk",
    title: "Meetup: Dari Junior ke Senior Developer",
    description:
      "Panel diskusi bersama beberapa senior engineer seputar jenjang karier, budaya code review, dan soft skill di industri tech.",
    date: "2026-10-17T13:00:00.000Z",
    location: "Ruang Komunitas, Surabaya",
    quota: 30,
    quotaRemaining: 8,
  },
  {
    id: "hackathon-ai-x-web",
    title: "Hackathon: AI x Web, Build in 24 Hours",
    description:
      "Eksperimen mengintegrasikan AI ke aplikasi web dalam 24 jam, ditutup dengan sesi demo day dan penjurian.",
    date: "2026-10-24T08:00:00.000Z",
    location: "Gedung Serbaguna, Surabaya",
    quota: 80,
    quotaRemaining: 51,
  },
];
