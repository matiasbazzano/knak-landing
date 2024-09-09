document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('subscribePopup');
    const popupContent = document.querySelector('.popup-content');
    const closePopupBtn = document.getElementById('closePopup');
    const subscribeForm = document.getElementById('subscribeForm');

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

    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = 'N/A';
        const message = 'N/A';

        emailjs.send('KNAK_WEBSITE_SERVICE', 'ADMIN_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            phone: phone, 
            message: message,
            to_email: 'netwave.contact@gmail.com'
        }).then(() => {
            alert('Gracias por suscribirte.');
            event.target.reset();
            popupContent.classList.remove('show');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 500);
        }).catch(error => {
            console.error('Error al enviar el correo:', error);
        });
    });
});
