let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const image = document.getElementById('image');

const imageUrls = ['please_1.jpg', 'please_2.jpg', 'please_3.jpg', 'please_4.jpg', 'please_5.jpg'];
const finalImage = 'YEYYY.jpg';

// Set initial state from storage
if (clickCount > 0) {
    image.src = imageUrls[clickCount];
    yesButton.classList.add(`enlarged-x${clickCount}`);
    if (clickCount >= 1) {
        noButton.textContent = ["Are you sure love?", "Aww love naman, sure??", "DON'T DO THIS TO MEEEE!!!!", "PLEASEEE LOVE LEILAAA!!! HUHUHU"][clickCount - 1];
        if (clickCount >= 1) {
            noButton.classList.add('modified');
        }
    }
    if (clickCount >= 5) {
        yesButton.style.transform = 'scale(10)';
        message.textContent = "YES!!!";
        image.src = finalImage;
        noButton.style.display = 'none';
    }
}

noButton.addEventListener('click', function() {
    clickCount++;
    localStorage.setItem('clickCount', clickCount); // Save the state to localStorage

    if (clickCount === 1) {
        image.src = imageUrls[1];
        yesButton.classList.add('enlarged');
        noButton.textContent = "Are you sure love?";
        noButton.classList.add('modified');
    } else if (clickCount === 2) {
        image.src = imageUrls[2];
        yesButton.classList.add('enlarged-x2');
        noButton.textContent = "Aww love naman, sure??";
    } else if (clickCount === 3) {
        image.src = imageUrls[3];
        yesButton.classList.add('enlarged-x3');
        noButton.textContent = "DON'T DO THIS TO MEEEE!!!!";
    } else if (clickCount === 4) {
        image.src = imageUrls[4];
        noButton.textContent = "PLEASEEE LOVE LEILAAA!!! HUHUHU";
    }
    if (clickCount >= 5) {
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
