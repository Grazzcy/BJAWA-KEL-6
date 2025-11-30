// Intersection Observer untuk animasi saat scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Hapus class visible agar animasi bisa dijalankan lagi
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe semua elemen yang ingin dianimasi
document.addEventListener('DOMContentLoaded', () => {
    // Animasi untuk konten-row
    const kontenRow = document.querySelector('.konten-row');
    if (kontenRow) {
        kontenRow.classList.add('animate-element');
        observer.observe(kontenRow);
    }

    // Animasi untuk kertas (halaman 2)
    const kertas = document.querySelector('.kertas');
    if (kertas) {
        kertas.classList.add('animate-element');
        observer.observe(kertas);
    }

    // Animasi untuk judul-box
    const judulBox = document.querySelector('.judul-box');
    if (judulBox) {
        judulBox.classList.add('animate-element');
        observer.observe(judulBox);
    }

    // Animasi untuk list-box
    const listBox = document.querySelector('.list-box');
    if (listBox) {
        listBox.classList.add('animate-element');
        observer.observe(listBox);
    }

    // Animasi untuk judul-list
    const judulList = document.querySelector('.judul-list');
    if (judulList) {
        judulList.classList.add('animate-element');
        observer.observe(judulList);
    }

    // Animasi untuk gambar makanan
    const gambarMakanan = document.querySelector('.gambar-makanan');
    if (gambarMakanan) {
        gambarMakanan.classList.add('animate-element');
        observer.observe(gambarMakanan);
    }

    // Animasi untuk box-teks
    const boxTeks = document.querySelector('.box-teks');
    if (boxTeks) {
        boxTeks.classList.add('animate-element');
        observer.observe(boxTeks);
    }

    // Animasi untuk judul-atas
    const judulAtas = document.querySelectorAll('.judul-atas');
    judulAtas.forEach(judul => {
        judul.classList.add('animate-element');
        observer.observe(judul);
    });
});
