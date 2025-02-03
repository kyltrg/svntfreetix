let clickCount = 0;
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const image = document.getElementById('image');

const imageUrls = ['please_1.jpg', 'please_2.jpg', 'please_3.jpg', 'please_4.jpg', 'please_5.jpg'];
const finalImage = 'YEYYY.jpg';

noButton.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
        // First click of "No"
        image.src = imageUrls[1];
        yesButton.classList.add('enlarged');
        noButton.textContent = "Are you sure love?";
        noButton.classList.add('modified');
    } else if (clickCount === 2) {
        // Second click of "No"
        image.src = imageUrls[2];
        yesButton.classList.add('enlarged-x2');
        noButton.textContent = "Aww love naman, sure??";
    } else if (clickCount === 3) {
        // Third click of "No"
        image.src = imageUrls[3];
        yesButton.classList.add('enlarged-x3');
        noButton.textContent = "DON'T DO THIS TO MEEEE!!!!";
    } else if (clickCount === 4) {
        // Fourth click of "No"
        image.src = imageUrls[4];
        noButton.textContent = "PLEASEEE LOVE LEILAAA!!! HUHUHU";
    }
    if (clickCount >= 5) {
        // If clicked 5 times, show final screen
        yesButton.style.transform = 'scale(10)';
        message.textContent = "YES!!!";
        image.src = finalImage;
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', function() {
    const audio = new Audio('voice-message.mp3');
    audio.play();
    setTimeout(() => {
        alert('YEYYY!!!');
    }, audio.duration * 1000);
});
