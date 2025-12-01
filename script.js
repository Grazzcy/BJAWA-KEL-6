

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

            // Cek apakah search term ada di title atau description
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
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
                        <p style="font-weight: bold; margin-bottom: 10px;">Mboten wonten kasil dipunpanggihaken</p>
                        <p>Nyuwun pangapunten, produk kanthi jeneng "<strong>${searchTerm}</strong>" mboten kapanggih. Mangga coba tembung kunci sanès.</p>
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
    'ꦒꦸꦝꦼꦒ꧀ (gudeg)': {
        icon: 'gudheg.jpeg',
        badge: 'New',
        title: 'ꦒꦸꦝꦼꦒ꧀ (gudeg)',
        description: 'Gudeg punika minangka panganan tradisional saking Ngayogyakarta. Panganan menika dipun damel saking gori enom ingkang dipun masak mawi santan, gula jawa, saha bumbu-bumbu rempah. Rasane legi lan lembut, lan gadhah aroma ingkang khas. Biasanipun gudeg dipun sajiaken kaliyan sega putih, ayam kampung, telur pindang, lan sambel goreng krecek. Panganan menika dados salah satunggaling ciri khas kulinering Yogyakarta ingkang misuwur.',
        features: [
            'Asalipun saking kitha Yogyakarta.',
            'Kawiwitan abad kaping-16 nalika pambangunan Kraton Mataram.',
            'Dipun-ginakaken para abdi lan prajurit kangge dhaharan bebarengan.',
            'Gadhah ciri rasa manis-gurih khas Yogyakarta.',
            'Dados panganan khas Yogyakarta ingkang misuwur dumugi samenika.'
        ]
    },
    'ꦒꦼꦧ꧀ꦭꦺꦏ꧀ (geblek)': {
        icon: 'geblek.jpeg',
        badge: 'Popular',
        title: 'ꦒꦼꦧ꧀ꦭꦺꦏ꧀ (geblek)',
        description: 'Geblek punika panganan tradisional saking wilayah Kulon Progo. Panganan menika dipun damel saking adonan pati ketela pohon ingkang dipun campur kaliyan bumbu-bumbu prasaja, lajeng dipun bentuk melingkar lan dipun goreng ngantos garing. Rasane gurih saha renggi, lan asring dipun dhahar minangka cemilan utawi panganan saékang dipun iringi banyu teh. Geblek ugi dados salah satunggaling ciri khas kulinering Kulon Progo ingkang taksih dipun tresnani dening masyarakat.',
        features: [
            'Asalipun saking Kulon Progo, DIY.',
            'Wonten wiwit jaman biyèn minangka cemilan masyarakat tani.',
            'Bentukipun khas kados angka wolu.',
            'Gadhah rasa gurih lan garing.',
            'Dados jajanan khas Kulon Progo ingkang dados identitas kulinèripun.'
        ]
    },
    'ꦠꦶꦮꦸꦭ꧀ (tiwul)': {
        icon: 'tiwul.jpeg',
        badge: 'Featured',
        title: 'ꦠꦶꦮꦸꦭ꧀ (tiwul)',
        description: 'Tiwul punika panganan tradisional saking masyarakat Jawa, mliginipun ing tlatah Gunungkidul. Panganan menika dipun damel saking gaplek ingkang dipun giling dados oyak, lajeng dipun kukus ngantos mateng. Rasane khas saha gadhah tekstur ingkang lembut nanging rada granula. Tiwul asring dipun sajiaken minangka penggantos sega, lan saged dipun padoni kaliyan sayur, iwak asin, utawi gula jawa miturut selera. Panganan menika nglambangaken kesederhanaan lan kearifan lokal masyarakat.',
        features: [
            'Asalipun saking daerah gampingan Jawa (Gunungkidul, Wonogiri, Pacitan).',
            'Wonten jaman biyèn dados pangan pokok nalika kakirangan beras.',
            'Rasanipun legi alami lan ngenyangaken.',
            'Dipun-sebat minangka panganan khas masyarakat pegunungan.',
            'Taksih lestari minangka panganan tradisional dumugi samenika.'
        ]
    },
    'ꦧꦏ꧀ꦥꦶꦲ (bakpia)': {
        icon: 'bakpia.jpeg',
        badge: 'Premium',
        title: 'ꦧꦏ꧀ꦥꦶꦲ (bakpia)',
        description: 'Bakpia punika panganan tradisional ingkang misuwur saking kitha Ngayogyakarta. Panganan menika wujud kue alit berisi isen-isen kados ta kacang hijau, coklat, keju, utawi rasa-rasa sanès miturut perkembangan jaman. Kulité tipis lan garing, dene isenipun lembut saha manis. Bakpia asring dipun dadosaken oleh-oleh khas Yogyakarta amargi rasane ingkang nikmat lan dipun remeni kathah tiyang.',
        features: [
            'Asal-usulipun saking jajanan Tiongkok.',
            'Dipun-ngrembakaaken dening perantau Tionghoa ing Yogyakarta.',
            'Kampung Pathuk dados pusat pabrikan bakpia.',
            'Rasanipun empuk lan legi kanthi kathah variasi.',
            'Dados oleh-oleh khas Yogyakarta ingkang kondhang.'
        ]
    },
    'ꦒꦼꦛꦸꦏ꧀ (gethuk)': {
        icon: 'getuk.jpeg',
        badge: 'Best Seller',
        title: 'ꦒꦼꦛꦸꦏ꧀ (gethuk)',
        description: 'Gethuk punika panganan tradisional ingkang asalipun saking bahan ketela pohon. Ketela punika dipun kukus, dipun tumbuk ngantos halus, lajeng dipun campur kaliyan gula jawa utawi gula pasir sarta parutan klapa. Rasane manis, lembut, lan gadhah aroma khas saking bahan alami. Gethuk asring dipun sajiaken minangka cemilan saben dinten lan dados salah satunggaling jajanan tradisional ingkang taksih dipun remeni déning masyarakat.',
        features: [
            'Asalipun saking tradisi masyarakat pedesaan Jawa.',
            'Wonten minangka pangan alternatif jaman biyèn.',
            'Gadhah tekstur lembut lan rasa prasaja.',
            'Dipun-sajikaken kanthi bentuk sederhana.',
            'Varian misuwuripun inggih punika Gethuk Lindri saking Magelang.'
        ]
    },
    'ꦮꦗꦶꦏ꧀ (wajik)': {
        icon: 'wajik.jpeg',
        badge: 'Award Winner',
        title: 'ꦮꦗꦶꦏ꧀ (wajik)',
        description: 'Wajik punika salah satunggaling panganan tradisional ingkang dipun damel saking beras ketan ingkang dipun masak mawi santan lan gula jawa. Panganan menika gadhah rasa manis lan tekstur ingkang lengket nanging lembut. Wajik asring dipun bentuk dados potongan segi papat lan dipun sajiaken nalika acara-acara adat utawi minangka suguhan dhahar tamu. Panganan menika nggambaraken kesederhanaan lan rasa guyub ing budaya masyarakat Jawa.',
        features: [
            'Jajanan tradisional Jawa saking jaman biyèn.',
            'Dipun-bentuk khas kados belah ketupat.',
            'Asring dipun-hidangaken wonten upacara adat.',
            'Gadhah makna kekompakan lan panyawiji.',
            'Taksih lestari ing acara adat lan kendhuri dumugi samenika.'
        ]
    }
};

// Fungsi untuk membuka popup
function openPopup(productTitle) {
    console.log('openPopup called with:', productTitle); // Debug
    const modal = document.getElementById('productModal');
    const product = productData[productTitle];
    
    console.log('Product found:', product); // Debug
    
    if (product) {
        // Update konten popup
        const popupIcon = document.getElementById('popupIcon');
        // Jika icon berupa file gambar
        if (product.icon.includes('.jpeg') || product.icon.includes('.jpg') || product.icon.includes('.png')) {
            popupIcon.innerHTML = `<img src="${product.icon}" alt="${product.title}" style="width: 150px; height: 150px; border-radius: 15px; object-fit: cover;">`;
        } else {
            popupIcon.textContent = product.icon;
        }
        
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
        console.log('Modal activated'); // Debug
    } else {
        console.error('Product not found for title:', productTitle); // Debug
    }
}

// Fungsi untuk menutup popup
function closePopup() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Intersection Observer untuk animasi saat scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Hapus class visible agar animasi bisa dijalankan lagi
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Initialize popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all card buttons
    const cardButtons = document.querySelectorAll('.card-button');
    
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.card');
            const productTitle = card.querySelector('.card-title').textContent;
            console.log('Opening popup for:', productTitle); // Debug
            openPopup(productTitle);
        });
    });
    
    // Close popup when clicking outside
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });

    // Animasi scroll untuk semua card dengan delay bertahap
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.add('animate-element');
        card.style.transitionDelay = `${index * 0.15}s`;
        scrollObserver.observe(card);
    });

    // Animasi untuk search box
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.classList.add('animate-element');
        scrollObserver.observe(searchContainer);
    }
});
