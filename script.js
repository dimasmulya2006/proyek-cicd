document.getElementById("judul").textContent =
    "Halaman ini dikelola oleh pipeline CI/CD";

const tombol = document.getElementById("tombol");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
    pesan.textContent =
        "Website berhasil menjalankan JavaScript!";
});
