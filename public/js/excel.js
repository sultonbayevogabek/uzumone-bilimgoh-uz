'use strict';

let user = JSON.parse(localStorage.getItem('user'));
const subscriberButtons = document.querySelectorAll('.telegram-channel-btn');

subscriberButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    window.location.href = 'https://t.me/+rneOxYu4aDYzNDYy';
  })
})


if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();
    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    fetch('https://script.google.com/macros/s/AKfycbyw9egR7-12cZMmgZHQmEtfAxKo6pJ8ISrR7D-MHOuXMsomPOxHSjYRe92THBNAwKRE/exec', {
        method: 'POST',
        body: formData
    })
        .then()
        .then(() => {
            localStorage.clear();
        })
} else {
    localStorage.clear();
}
