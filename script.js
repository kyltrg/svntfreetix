document.addEventListener('DOMContentLoaded', () => {
    let screenCounter = 1;
    const app = document.getElementById('app');
    const screens = document.querySelectorAll('.screen');
    const yesBtns = document.querySelectorAll('.button.yes');
    const noBtns = document.querySelectorAll('.button.no');
    
    app.style.display = 'block';
    screens[0].style.display = 'flex'; // Show the first screen

    function showScreen(nextScreen) {
        screens.forEach(screen => screen.style.display = 'none'); // Hide all screens
        screens[nextScreen - 1].style.display = 'flex'; // Show the next screen
    }

    yesBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (screenCounter < 5) {
                screenCounter++;
                showScreen(screenCounter);
            } else if (screenCounter === 5) {
                showScreen(6); // Go to YEY screen
            }
        });
    });

    noBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Enlarge 'Yes' button and adjust 'No' button text dynamically
            const scaleFactor = (index + 2);
            yesBtns[index].style.transform = `scale(${scaleFactor})`; // Enlarge 'Yes' button
            noBtns[index].style.transform = `scale(${scaleFactor})`; // Adjust 'No' button
            noBtns[index].textContent = `Are you sure love?`; // Change text
            if (index === 4) {
                noBtns[index].textContent = 'PLEASEEE LOVE LEILAAA!!! HUHUHU'; // Change text for last 'No' button
            }
        });
    });
});
