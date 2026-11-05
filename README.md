# GrowUp Digital - Website Konsultasi Digital Marketing UMKM

Website statis (HTML, CSS, JavaScript) untuk jasa konsultasi dan pengelolaan iklan digital bagi UMKM.

## Fitur
- Daftar layanan (konsultasi, Meta Ads, TikTok Ads, Google Ads, konten, laporan)
- Tabel harga 3 paket (Konsultasi, Growth, Pro)
- Rundown program 1 bulan (minggu 1-4)
- Mekanisme konsultasi dari booking sampai evaluasi
- Kalkulator estimasi iklan (klik, pesanan, omzet, ROAS)
- Form booking yang terkirim otomatis ke WhatsApp
- FAQ, tombol WhatsApp melayang, tampilan responsif

## Cara Mengubah Data
- Nomor WhatsApp: `script.js` bagian `WA_NUMBER`
- Harga dan layanan: `index.html`

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub (contoh: `growup-digital`)
2. Upload semua file (`index.html`, `style.css`, `script.js`, `README.md`)
3. Buka **Settings > Pages**
4. Pada **Source** pilih branch `main` dan folder `/ (root)`, lalu **Save**
5. Tunggu 1-2 menit, website aktif di `https://USERNAME.github.io/growup-digital/`

## Via Git (opsional)
```bash
git init
git add .
git commit -m "Website konsultasi digital marketing UMKM"
git branch -M main
git remote add origin https://github.com/USERNAME/growup-digital.git
git push -u origin main
```
