document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('subscribePopup');
    const popupContent = document.querySelector('.popup-content');
    const closePopupBtn = document.getElementById('closePopup');

    setTimeout(() => {
        popupOverlay.style.display = 'flex';
        
        setTimeout(() => {
            popupContent.classList.add('show');
        }, 500); 
    }, 1500);

    closePopupBtn.addEventListener('click', () => {
        popupContent.classList.remove('show');
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 500);
    });

    window.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupContent.classList.remove('show');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 500);
        }
    });
});
