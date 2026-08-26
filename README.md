# Event SurabayaDev

Aplikasi web untuk menjelajah, mencari, dan mendaftar event komunitas developer (workshop & meetup). Dibangun sebagai bagian dari **SurabayaDev Developer Technical Assessment**, jalur Frontend Developer.

## Fitur

- **Daftar event**: grid event lengkap dengan info tanggal, lokasi, kategori, kuota, dan harga
- **Pencarian event**: input dengan debounce ~400ms, filter dilakukan di server lewat API
- **Filter kategori**: Workshop / Meetup, bisa digabung dengan hasil pencarian
- **Detail event**: deskripsi lengkap, benefit, pembicara, dan info harga (gratis/berbayar)
- **Registrasi event**: kuota dicek di server sebelum pendaftaran diproses. Status "sudah terdaftar" disimpan di `localStorage` sebagai pengganti auth, karena scope tidak mencakup login
- Transisi halaman halus (View Transitions API) dan notifikasi toast

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) (Base UI)
- [Sonner](https://sonner.emilkowal.ski) untuk toast
- Data: Next.js API Routes dengan penyimpanan in-memory (lihat catatan di bawah)

## Menjalankan Secara Lokal

```bash
pnpm install
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
src/
├── app/
│   ├── events/
│   │   ├── page.tsx              # daftar + pencarian event
│   │   └── [id]/page.tsx         # detail event
│   ├── api/events/
│   │   ├── route.ts              # GET daftar event (+ ?search=)
│   │   └── [id]/
│   │       ├── route.ts          # GET detail event
│   │       └── register/route.ts # POST registrasi event
│   └── page.tsx                  # redirect ke /events
├── components/
│   ├── events/                   # komponen spesifik domain event
│   ├── shared/                   # komponen generik (SearchBar, QuotaBadge, dll)
│   └── ui/                       # primitives shadcn/ui
└── lib/                          # types, seed data, helper format & kategori
```

## Catatan: Data In-Memory

Data event disimpan sebagai array in-memory, bukan database sungguhan. Ini keputusan sadar sesuai scope demo frontend, bukan kekurangan. Konsekuensinya:

- Data (termasuk `quotaRemaining` setelah registrasi) **reset setiap kali server restart atau redeploy**.
- Status "sudah terdaftar" tetap tersimpan di `localStorage` browser walau data server reset, karena keduanya independen satu sama lain.

## Live Demo

[surabayadev-tes.vercel.app](https://surabayadev-tes.vercel.app)
