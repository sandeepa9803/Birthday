// script.js
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo-gallery img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            photo.classList.toggle('enlarged');
        });
    });
});
