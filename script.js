// Toggle Search Box
document.addEventListener('DOMContentLoaded', function() {
    const searchTrigger = document.getElementById('searchTrigger');
    const searchBox = document.getElementById('searchBox');
    const searchInput = document.getElementById('searchInput');

    searchTrigger.addEventListener('click', function() {
        searchBox.classList.add('active');
        searchTrigger.classList.add('active');
        setTimeout(() => {
            searchInput.focus();
        }, 200);
    });

    // Close search box when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchTrigger.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            searchTrigger.classList.remove('active');
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchTrigger.classList.remove('active');
        }
    });
});

// Fungsi Search untuk memfilter card
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cards = document.querySelectorAll('.card');

    // Fungsi untuk melakukan pencarian
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            const badge = card.querySelector('.card-badge').textContent.toLowerCase();

            // Cek apakah search term ada di title, description, atau badge
            if (title.includes(searchTerm) || description.includes(searchTerm) || badge.includes(searchTerm)) {
                card.style.display = 'flex';
                // Tambahkan animasi fade in
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });

        // Tampilkan pesan jika tidak ada hasil
        showNoResultsMessage(searchTerm);
    }

    // Fungsi untuk menampilkan pesan "tidak ada hasil"
    function showNoResultsMessage(searchTerm) {
        const container = document.querySelector('.container');
        let noResultsMsg = document.querySelector('.no-results-message');

        const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');

        if (visibleCards.length === 0 && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: white; font-size: 18px;">
                        <p style="font-size: 48px; margin-bottom: 10px;">🔍</p>
                        <p style="font-weight: bold; margin-bottom: 10px;">Tidak ada hasil ditemukan</p>
                        <p style="font-size: 14px; opacity: 0.8;">Coba kata kunci lain</p>
                    </div>
                `;
                container.appendChild(noResultsMsg);
            }
        } else {
            if (noResultsMsg) {
                noResultsMsg.remove();
            }
        }
    }

    // Event listener untuk tombol search
    searchButton.addEventListener('click', performSearch);

    // Event listener untuk input (search saat mengetik)
    searchInput.addEventListener('input', performSearch);

    // Event listener untuk tombol Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Tambahkan animasi CSS untuk fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Data produk untuk popup
const productData = {
    'Card Design': {
        icon: '🎨',
        badge: 'New',
        title: 'Card Design',
        description: 'Card yang menarik dengan desain modern dan responsif. Dilengkapi dengan efek hover yang smooth dan animasi yang elegan. Sempurna untuk menampilkan konten dengan cara yang menarik dan interaktif.',
        features: [
            'Desain modern dan elegan',
            'Responsif di semua perangkat',
            'Animasi smooth dan interaktif',
            'Mudah dikustomisasi',
            'Performa optimal'
        ]
    },
    'Fitur Unggulan': {
        icon: '🚀',
        badge: 'Popular',
        title: 'Fitur Unggulan',
        description: 'Nikmati pengalaman terbaik dengan fitur-fitur unggulan yang kami tawarkan. Mudah digunakan dan sangat fleksibel. Dirancang khusus untuk memenuhi kebutuhan modern Anda.',
        features: [
            'Interface yang user-friendly',
            'Performa tinggi dan cepat',
            'Integrasi mudah dengan sistem lain',
            'Dukungan multi-platform',
            'Update rutin dan maintenance'
        ]
    },
    'Kualitas Terbaik': {
        icon: '⭐',
        badge: 'Featured',
        title: 'Kualitas Terbaik',
        description: 'Kami menjamin kualitas terbaik untuk setiap produk dan layanan yang kami sediakan untuk Anda. Dipercaya oleh ribuan pengguna di seluruh dunia.',
        features: [
            'Standar kualitas internasional',
            'Testing menyeluruh sebelum release',
            'Garansi kepuasan pelanggan',
            'Support 24/7',
            'Dokumentasi lengkap'
        ]
    },
    'Layanan Premium': {
        icon: '💎',
        badge: 'Premium',
        title: 'Layanan Premium',
        description: 'Dapatkan akses eksklusif ke layanan premium dengan berbagai keuntungan dan fitur tambahan yang menarik. Tingkatkan produktivitas Anda ke level berikutnya.',
        features: [
            'Akses prioritas ke fitur baru',
            'Support dedicated personal',
            'Customization tanpa batas',
            'Analytics dan reporting advanced',
            'Training dan consultation gratis'
        ]
    },
    'Pilihan Terfavorit': {
        icon: '🎯',
        badge: 'Best Seller',
        title: 'Pilihan Terfavorit',
        description: 'Produk paling diminati oleh pelanggan kami. Bergabunglah dengan ribuan pengguna yang puas dengan pilihan ini. Terbukti efektif dan reliable.',
        features: [
            'Rating 5 bintang dari pengguna',
            'Paling banyak dipilih',
            'ROI terbukti tinggi',
            'Community support yang aktif',
            'Update dan improvement berkelanjutan'
        ]
    },
    'Pemenang Penghargaan': {
        icon: '🏆',
        badge: 'Award Winner',
        title: 'Pemenang Penghargaan',
        description: 'Dipercaya dan telah memenangkan berbagai penghargaan. Buktikan sendiri mengapa kami menjadi yang terbaik. Diakui oleh industri dan pengguna.',
        features: [
            'Pemenang multiple awards',
            'Sertifikasi internasional',
            'Recognized by industry leaders',
            'Inovasi terdepan',
            'Track record terpercaya'
        ]
    }
};

// Fungsi untuk membuka popup
function openPopup(productTitle) {
    const modal = document.getElementById('productModal');
    const product = productData[productTitle];
    
    if (product) {
        // Update konten popup
        document.getElementById('popupIcon').textContent = product.icon;
        document.getElementById('popupBadge').textContent = product.badge;
        document.getElementById('popupTitle').textContent = product.title;
        document.getElementById('popupDescription').textContent = product.description;
        
        // Update features list
        const featuresList = document.getElementById('popupFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Fungsi untuk menutup popup
function closePopup() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Fungsi handle order
function handleOrder() {
    const productTitle = document.getElementById('popupTitle').textContent;
    alert(`Terima kasih! Anda akan memesan: ${productTitle}\n\nFitur ini akan mengarahkan Anda ke halaman checkout.`);
    closePopup();
}

// Close popup when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// Add event listeners to all card buttons
document.addEventListener('DOMContentLoaded', function() {
    const cardButtons = document.querySelectorAll('.card-button');
    
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const productTitle = card.querySelector('.card-title').textContent;
            openPopup(productTitle);
        });
    });
});
