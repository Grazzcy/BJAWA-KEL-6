// Fungsi Search untuk memfilter card
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
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
