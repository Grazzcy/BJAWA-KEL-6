

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
        description: 'Gudeg punika salah satunggaling panganan khas saking kitha Yogyakarta. Panganan punika kawiwitan wonten abad kaping-16 nalika pambangunan Kraton Mataram ing Alas Mentaok. Wonten ing wekdal punika, kathah wit nangka, kluthuk, saha tangkil ingkang dipun-ginakaken para abdi saha para prajurit kangge masak bebarengan. Nangka enom punika lajeng dipun-godhok kalihan santan, gula jawa, lan bumbu-bumbu ingkang prasaja, lajeng dados panganan kanthi rasa manis gurih ingkang sinebat gudeg. Sakmensahipun, gudeg dados dhaharan khas Yogyakarta lan saya misuwur ing salebeting Nusantara.',
        features: [
            'Gudeg asring dipun sebat "dhaharan paling legi wonten ing Tanah Jawa" amargi rasane manis sanget.',
            'Wiyosane dipun masak pirang-pirang jam wonten ing kendhil tanah liat, saéngga gadhah ambu khas.',
            'Wonten gudeg kering lan gudeg teles, mawi bedanipun wonten ing cara masakipun.',
            'Daun jati dipun-ginakaken supados warna gudeg coklat alami.',
            'Wonten ing Yogyakarta gadhah Kampung Gudeg ingkang misuwur amargi kathah penjualipun.'
        ]
    },
    'ꦒꦼꦧ꧀ꦭꦺꦏ꧀ (geblek)': {
        icon: 'geblek.jpeg',
        badge: 'Popular',
        title: 'ꦒꦼꦧ꧀ꦭꦺꦏ꧀ (geblek)',
        description: 'Geblek punika panganan tradisional saking wewengkon Kulon Progo, DIY. Panganan punika damel saking aci singka lan dipun-uleg bareng bumbu bawang, lajeng dipunbentuk kados angka wolu lan dipun-goreng. Miturut crita tradisi, geblek sampun wonten wiwit jaman biyèn nalika masyarakat tani ing Kulon Progo ndamel olahan saking pati singka kanggé cemilan ingkang awet lan trep kanggé dhaharan sanèsipun. Rasanipun gurih lan garing, dados nambah kawentaripun minangka jajanan khas ingkang dados identitas kulinèr Kulon Progo dumugi samenika.',
        features: [
            'Wonten ingkang ngendika bilih wujud geblek punika mirip angka wolu (8) utawi lambang tanpa wates.',
            'Dipun damel saking pati ketela pohon murni, saéngga teksturipun kenyal lan gurih.',
            'Asring dipun padoni kaliyan tempe bacem minangka panganan panyangga.',
            'Warna putihipun asal saking bahan alami, tanpa pewarna sintetik.',
            'Dados cemilan rakyat ing jaman rumiyin, asring dipun bawa déning petani dhateng sawah.'
        ]
    },
    'ꦠꦶꦮꦸꦭ꧀ (tiwul)': {
        icon: 'tiwul.jpeg',
        badge: 'Featured',
        title: 'ꦠꦶꦮꦸꦭ꧀ (tiwul)',
        description: 'Tiwul punika dhaharan tradisional saking gampingan Jawa, utaminipun ing wewengkon Gunungkidul, Wonogiri, lan Pacitan. Tiwul kawiwitan minangka dhaharan pokok nalika jaman biyèn, amargi masyarakat ing daerah tandus awrat angsal beras. Wonten ing wekdal punika, masyarakat ngginakaken gaplek, yaiku ketela pohung ingkang dipun-jemur nganti garing, lajeng dipun-giling dados glepung lan dipun-olah dados tiwul. Rasanipun gampil, legi alami, lan saged ngenyangaken. Dumugi samenika, tiwul tetep dados salah satunggaling panganan khas ingkang nggambaraken kearifan lokal masyarakat gampingan.',
        features: [
            'Tiwul nate dados dhaharan pokok masyarakat Gunungkidul minangka penggantos sega.',
            'Dipun damel saking gaplek ingkang dipun giling alit sanget.',
            'Dipun pitados langkung sehat tinimbang sega putih amargi kadar gulane langkung andhap.',
            'Saged dipun sajiaken manis kaliyan gula jawa utawi gurih kaliyan iwak asin.',
            'Tiwul dados simbol kesederhanaan lan ketahanan pangan masyarakat.'
        ]
    },
    'ꦧꦏ꧀ꦥꦶꦲ (bakpia)': {
        icon: 'bakpia.jpeg',
        badge: 'Premium',
        title: 'ꦧꦏ꧀ꦥꦶꦲ (bakpia)',
        description: 'Bakpia punika jajanan ingkang asal-usulipun saking Tiongkok. Wonten ing asalipun, panganan punika sinebat tou luk pia, ingkang tegesipun roti cilik isi kacang ijo. Ing abad kaping-20, para perantau Tionghoa ing Yogyakarta miwiti ngolah lan ngasilaken bakpia kanthi cara ingkang langkung trep kaliyan selera masyarakat lokal. Salah satunggaling kampung ing Yogyakarta, inggih punika Kampung Pathuk, lajeng dados pusat pabrikan bakpia lan misuwur dumugi jaman samenika. Saking mriku, bakpia dados salah satunggaling oleh-oleh khas Yogyakarta ingkang kondhang amargi rasane empuk, legi, lan kathah variasinipun.',
        features: [
            'Asal-usul bakpia punika saking panganan Tionghoa "tou luk pia", ingkang lajeng kasil adaptasi dados rasa lokal.',
            'Bakpia Pathok punika ingkang sepindhah misuwur wonten ing Yogyakarta.',
            'Rumiyin namung wonten isen kacang ijo, sapunika kathah varian moderen.',
            'Sentra produksi bakpia saged ndamel ewonan butir saben dinten.',
            'Wujudipun alit supados gampil kanggé dipun dhahar sak gigitan.'
        ]
    },
    'ꦒꦼꦛꦸꦏ꧀ (gethuk)': {
        icon: 'getuk.jpeg',
        badge: 'Best Seller',
        title: 'ꦒꦼꦛꦸꦏ꧀ (gethuk)',
        description: 'Gethuk punika jajanan tradisional saking tanah Jawa, utaminipun dipun-gadahi dening masyarakat pedesaan. Panganan punika asalipun saking kabiasaan masyarakat ngolah ketela pohung (singkong) minangka sumber pangan alternatif nalika kesulitan pikantuk beras jaman biyèn. Ketela pohung punika dipun-godhog, dipun-uleg, lajeng dipun-campur gula jawa utawi gula pasir saha dipun-paringi rasa. Gethuk lajeng dipun-bentuk prasaja lan dipun-sajikaken kalawan parutan klapa. Wonten ing sawetawis daerah, gethuk dados ciri khas kados ta Gethuk Lindri ing Magelang, ingkang warna-warni lan dipun-giling ngagem mesin khusus. Dumugi samenika, gethuk tetep dados jajanan ingkang dipun-remeni amargi rasanipun sederhana nanging ngelingake dhateng tradisi lawas.',
        features: [
            'Gethuk dados panganan khas ing tlatah pegunungan amargi ketela pohon ngrembaka kathah.',
            'Gethuk lindri gadhah warna cerah saking pangan alami kados pandan utawi gula jawa.',
            'Pembentukane migunakaken mesin penggiling mie supados gadhah garis-garis khas.',
            'Naté misuwur dados oleh-oleh utama saking Magelang.',
            'Rumiyin asring dipun dhahar minangka sarapan penggantos sega.'
        ]
    },
    'ꦮꦗꦶꦏ꧀ (wajik)': {
        icon: 'wajik.jpeg',
        badge: 'Award Winner',
        title: 'ꦮꦗꦶꦏ꧀ (wajik)',
        description: 'Wajik punika panganan tradisional saking masyarakat Jawa ingkang sampun wonten wiwit jaman biyèn. Panganan punika damel saking beras ketan ingkang dipun-aron kalihan gula jawa lan santan, lajeng dipun-olah dumugi kental lan dipun-bentuk kados belah ketupat. Ing budaya Jawa, wajik asring dipun-ginakaken minangka panganan upacara, amargi maknanipun nyarujuki “kekompakan” lan “panyawiji” antarane warga. Amargi rasanipun legi lan gampil kacicipi, wajik dados salah satunggaling jajanan tradisional ingkang tetep lestari dumugi samenika, utaminipun ing acara adat lan kendhuri.',
        features: [
            'Wajik dipun anggep minangka simbol kerukunan lan kekompakan amargi teksture lengket – pralambangipun guyub.',
            'Asring kapanggih wonten ing acara adat Jawa, kados slametan lan hajatan.',
            'Proses masakipun dangu amargi ketan kedah nyerap santan lan gula kanthi sampurna.',
            'Warna coklatipun saking gula jawa asli tanpa pewarna tambahan.',
            'Kadhangkala wonten variasi unik kados wajik ketan ireng.'
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
