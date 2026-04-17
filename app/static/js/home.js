const cards = document.querySelectorAll('.video-card');
let currentVideo = null;
let currentThumbnail = null;

cards.forEach(card => {
    const thumbnail = card.querySelector('.thumbnail');
    const video = card.querySelector('.video');

    thumbnail.addEventListener('click', () => {

        // Reset previous video
        if (currentVideo && currentVideo !== video) {
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.style.display = 'none';

            if (currentThumbnail) {
                currentThumbnail.style.display = 'block';
            }

            // remove active from all
            cards.forEach(c => c.classList.remove('active'));
        }

        // Play current
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        video.play();

        card.classList.add('active');

        currentVideo = video;
        currentThumbnail = thumbnail;
    });
});