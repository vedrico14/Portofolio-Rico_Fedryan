# Portofolio Muhammad Rico Fedryan

Website portofolio profesional berbasis Next.js yang siap dijalankan di Vercel.
Build produksi menggunakan bundler Webpack resmi Next.js untuk hasil yang stabil
di lingkungan deployment.

## Teknologi

- Next.js 16.3.0
- React 19.2.8
- TypeScript 5.9
- CSS responsif tanpa dependensi UI tambahan

## Menjalankan di komputer

Pastikan Node.js 20.9 atau lebih baru sudah terpasang.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Pemeriksaan sebelum deployment

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment ke Vercel

1. Unggah seluruh isi folder ini ke root repository GitHub.
2. Hubungkan repository tersebut dengan Vercel.
3. Pilih framework **Next.js** dan root directory `./`.
4. Tidak ada environment variable yang perlu diisi.
5. Klik **Deploy**.

Jika project Vercel lama masih menjalankan `npm run build:vercel`, script tersebut tetap tersedia dan aman digunakan.

## Mengubah isi portofolio

- Konten profil, skill, proyek, pengalaman, sertifikasi, dan kontak: `app/page.tsx`
- Warna dan tampilan: `app/globals.css`
- Judul, deskripsi SEO, dan favicon: `app/layout.tsx`
- Ikon favicon: `public/favicon.svg`

Setelah perubahan di GitHub di-commit, Vercel akan melakukan deployment ulang secara otomatis.
