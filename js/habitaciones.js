
document.addEventListener('DOMContentLoaded', function () {
    const roomCards = document.querySelectorAll('.room-card');
    const roomDetails = document.querySelectorAll('.room-details');
    const mapContainer = document.querySelector('.map-section .map');
    const mapTitle = document.querySelector('.map-section h2');
    const discoverButtonContainer = document.getElementById('discover-button-container');
    let activeCard = null;
    const headerOffset = document.querySelector('.sticky-header').offsetHeight;

    const maps = {
        lavapies: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6780076298153!2d-3.702560524102245!3d40.408656255194265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226295bb3e21b%3A0x36b7d576441af6b2!2sPlaza%20de%20Lavapi%C3%A9s!5e0!3m2!1ses!2ses!4v1708793654825!5m2!1ses!2ses",
        Chamberí: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.987654320987!2d-3.704567890123456!3d40.43210987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262a91eec9f1%3A0x378d67f49b5a1cd1!2sPlaza%20de%20Olavide!5e0!3m2!1ses!2ses!4v1708793654826!5m2!1ses!2ses"
    };

// Mostrar ambos mapas inicialmente
    /*mapContainer.innerHTML = `
        <div class="map-grid">
            <iframe src="${maps.lavapies}" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <iframe src="${maps.quevedo}" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `;*/

    roomCards.forEach(card => {
        card.addEventListener('click', function () {
            const roomId = this.getAttribute('data-room');
            const targetDetail = document.getElementById(`${roomId}-details`);
            
            // Handle active card overlay
            if (activeCard && activeCard !== this) {
                activeCard.querySelector('.room-overlay').style.opacity = '1';
            }

            this.querySelector('.room-overlay').style.opacity = '0';
            activeCard = this;

           
            roomDetails.forEach(detail => {
                if (detail === targetDetail) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });

           
            discoverButtonContainer.style.display = 'block';

            
            if (maps[roomId]) {
                mapContainer.innerHTML = `
                    <iframe src="${maps[roomId]}" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                `;
                mapTitle.textContent = `Las habitaciones en ${roomId.charAt(0).toUpperCase() + roomId.slice(1)} están:`;
            }

            
            if (targetDetail) {
                const elementPosition = targetDetail.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
});
