// Ganti dengan nomor WhatsApp Anda (format internasional tanpa +)
const WA_NUMBER = "6281234567890";

const $ = (id) => document.getElementById(id);
const rp = (n) => "Rp" + Math.round(n).toLocaleString("id-ID");

// Menu mobile
$("burger").addEventListener("click", () => $("menu").classList.toggle("open"));
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => $("menu").classList.remove("open")));

// Tombol WhatsApp melayang
$("wa").href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo GrowUp Digital, saya ingin konsultasi iklan untuk usaha saya.")}`;

// Pilih paket dari kartu harga -> otomatis terpilih di form
document.querySelectorAll("[data-paket]").forEach(btn => {
  btn.addEventListener("click", () => { $("paket").value = btn.dataset.paket; });
});

// Kalkulator estimasi iklan
function hitung() {
  const budget = +$("budget").value || 0;
  const cpc = +$("cpc").value || 1;
  const conv = (+$("conv").value || 0) / 100;
  const harga = +$("harga-produk").value || 0;
  const margin = (+$("margin").value || 0) / 100;

  const klik = budget / cpc;
  const order = klik * conv;
  const omzet = order * harga;
  const laba = omzet * margin;
  const roas = budget ? omzet / budget : 0;
  const cpa = order ? budget / order : 0;

  $("hasil").innerHTML = `
    <div><span>Klik / hari</span><b>${Math.round(klik)}</b></div>
    <div><span>Pesanan / hari</span><b>${order.toFixed(1)}</b></div>
    <div><span>Omzet / hari</span><b>${rp(omzet)}</b></div>
    <div><span>Laba kotor / hari</span><b>${rp(laba)}</b></div>
    <div><span>ROAS</span><b>${roas.toFixed(1)}x</b></div>
    <div><span>Biaya per pesanan</span><b>${rp(cpa)}</b></div>
    <div style="grid-column:1/-1"><span>Laba setelah biaya iklan / hari</span><b>${rp(laba - budget)}</b></div>`;
}
["budget", "cpc", "conv", "harga-produk", "margin"].forEach(id => $(id).addEventListener("input", hitung));
hitung();

// Form booking -> WhatsApp
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const jadwal = new Date($("jadwal").value).toLocaleString("id-ID", { dateStyle: "full", timeStyle: "short" });
  const teks =
`Halo GrowUp Digital, saya ingin booking konsultasi.

Nama: ${$("nama").value}
Usaha: ${$("usaha").value}
Jenis usaha: ${$("jenis").value}
Paket: ${$("paket").value}
Jadwal: ${jadwal}
Kendala/target: ${$("pesan").value || "-"}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`, "_blank");
});
