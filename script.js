let total = 0;

function tambahPesanan(harga, namaMenu) {
    total += harga;
    document.getElementById("total-harga").innerText = "Rp " + total.toLocaleString("id-ID");
    console.log("Menu dipilih: " + namaMenu);
}
