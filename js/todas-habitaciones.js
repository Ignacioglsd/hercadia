document.addEventListener('DOMContentLoaded', function () {
    const filters = {
        zona: document.getElementById('zona'),
        disponibilidad: document.getElementById('disponibilidad'),
        tipo: document.getElementById('tipo'),
        bano: document.getElementById('bano'),
        exterior: document.getElementById('exterior'),  
        balcon: document.getElementById('balcon')
    };

    const roomCards = document.querySelectorAll('.room-card');

    function filterRooms() {
        const selectedZona = filters.zona.value;
        const selectedDisponibilidad = filters.disponibilidad.value;
        const selectedTipo = filters.tipo.value;
        const selectedBano = filters.bano.value;
        const selectedExterior = filters.exterior.value;
        const selectedBalcon = filters.balcon.value;

        roomCards.forEach(card => {
            const zona = card.getAttribute('data-zona');
            const disponibilidad = card.getAttribute('data-disponibilidad');
            const tipo = card.getAttribute('data-tipo');
            const bano = card.getAttribute('data-bano');
            const exterior = card.getAttribute('data-exterior');
            const balcon = card.getAttribute('data-balcon');

            const matchesZona = selectedZona === 'todas' || zona === selectedZona;
            const matchesDisponibilidad = selectedDisponibilidad === 'todas' || disponibilidad === selectedDisponibilidad;
            const matchesTipo = selectedTipo === 'todas' || tipo === selectedTipo;
            const matchesBano = selectedBano === 'todas' || bano === selectedBano;
            const matchesExterior = selectedExterior === 'todas' || exterior === selectedExterior;
            const matchesBalcon = selectedBalcon === 'todas' || balcon === selectedBalcon;

            if (matchesZona && matchesDisponibilidad && matchesTipo && 
                matchesBano && matchesExterior && matchesBalcon) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    Object.values(filters).forEach(filter => {
        filter.addEventListener('change', filterRooms);
    });
});
