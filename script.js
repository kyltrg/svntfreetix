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
            } else {
                showScreen(6); // Final screen
            }
        });
    });

    noBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Enlarge 'Yes' button and change 'No' button text
            yesBtns[index].style.transform = `scale(${(index + 2)})`; // Enlarge button
            btn.textContent = `Are you sure love?`; // Change text
            if (index === 4) {
                btn.textContent = 'PLEASEEE LOVE LEILAAA!!! HUHUHU'; // Change text for last 'No' button
            }
        });
    });
});
