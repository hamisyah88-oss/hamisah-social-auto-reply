# Hamisah Social Auto Reply v1.0

Starter aplikasi Instagram + Facebook.

Jalankan:
`npm install`
`npm run dev`

Build:
`npm run build`

Salin `.env.example` menjadi `.env.local`.

Dashboard sudah memiliki Campaign, Product Library, Demo Mode, Activity, Analytics, Settings, serta halaman koneksi Instagram/Facebook.

Webhook:
`/api/webhooks/meta`

Webhook di atas adalah endpoint awal untuk konfigurasi Meta. Sebelum produksi, tambahkan validasi event, idempotency comment_id, permission, token, dan pengiriman pesan menggunakan endpoint resmi Meta versi terbaru. Jangan gunakan password/cookie akun.
