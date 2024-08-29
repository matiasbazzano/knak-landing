document.addEventListener('DOMContentLoaded', function () {
    const soundToggle = document.getElementById('sound-toggle');
    const infoButton = document.getElementById('info-button');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('close-menu');
    const logo = document.querySelector('.logo');
    const header = document.querySelector('header');
    const elementsToHide = [logo];
    const video = document.getElementById('background-video');

    header.classList.remove('transparent-background');

    soundToggle.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            soundToggle.textContent = 'SOUND OFF';
        } else {
            video.muted = true;
            soundToggle.textContent = 'SOUND ON';
        }

        elementsToHide.forEach(element => {
            element.classList.toggle('hidden');
        });

        header.classList.toggle('transparent-background');
    });

    infoButton.addEventListener('click', function () {
        menu.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible' && video.paused) {
            video.play().catch(function() {
            });
        }
    });

    video.play().catch(function() {
    });
});
