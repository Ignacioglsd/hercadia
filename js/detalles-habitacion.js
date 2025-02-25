document.addEventListener('DOMContentLoaded', function () {
    // Obtener el parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const habitacionId = urlParams.get('habitacion');

    // Datos de las habitaciones (puedes ampliarlo con más detalles)
    const roomsData = {
        lavapies: {
            title: "Habitación 1 - Lavapiés",
            description: "Individual con baño privado, exterior con balcón. Disponible.",
            images: [
                "assests/imagenes/lavapies-habitacion1.jpg",
                "assests/imagenes/lavapies-habitacion2.jpg"
            ],
            videos: [
                "assests/videos/lavapies-video1.mp4"
            ]
        },
        Chamberi: {
            title: "Habitación 1 - Chamberi",
            description: "Doble con baño compartido, interior sin balcón. No disponible.",
            images: [
                "assests/imagenes/quevedo-habitacion1.jpg",
                "assests/imagenes/quevedo-habitacion2.jpg"
            ],
            videos: [
                "assests/videos/quevedo-video1.mp4"
            ]
        },
        // Añade más habitaciones aquí
    };

    // Cargar los detalles de la habitación
    const room = roomsData[habitacionId];
    if (room) {
        document.getElementById('room-title').textContent = room.title;
        document.getElementById('room-description').textContent = room.description;

        const roomImagesContainer = document.getElementById('room-images');
        room.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = room.title;
            roomImagesContainer.appendChild(img);
        });

        room.videos.forEach(video => {
            const videoElement = document.createElement('video');
            videoElement.src = video;
            videoElement.controls = true;
            roomImagesContainer.appendChild(videoElement);
        });
    } else {
        // Si no se encuentra la habitación, redirigir a la página de habitaciones
        window.location.href = 'habitaciones.html';
    }
});