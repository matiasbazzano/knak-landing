document.addEventListener('DOMContentLoaded', function () {
    const soundToggle = document.getElementById('sound-toggle');
    const infoButton = document.getElementById('info-button');
    const logo = document.querySelector('.logo');
    const footerLogo = document.querySelector('.footer-logo');
    const copyrightText = document.querySelector('.copyright-text');
    const header = document.querySelector('header');
    const video = document.getElementById('background-video');

    const elementsToHide = [logo, footerLogo, copyrightText];

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
        const menu = document.getElementById('menu');
        menu.classList.add('show');
    });

    const closeButton = document.getElementById('close-menu');
    closeButton.addEventListener('click', function () {
        const menu = document.getElementById('menu');
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
