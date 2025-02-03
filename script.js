let noClickCount = 0;
const noTexts = [
    "Are you sure love?",
    "Aww love naman, sure??",
    "DON'T DO THIS TO MEEEE!!!!",
    "PLEASEEE LOVE LEILAAA!!! HUHUHU"
];

function noClicked() {
    noClickCount++;

    if (noClickCount >= noTexts.length) {
        document.getElementById("yesBtn").style.fontSize = "50px";
        document.getElementById("yesBtn").style.width = "300px";
        document.getElementById("yesBtn").style.height = "100px";
        document.getElementById("yesBtn").textContent = "YES!!!";
        document.getElementById("noBtn").classList.add("hidden");
    } else {
        let yesButton = document.getElementById("yesBtn");
        let noButton = document.getElementById("noBtn");

        // Increase the size of the Yes button
        let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + "px";

        // Change No button text
        noButton.textContent = noTexts[noClickCount - 1];
    }
}

function yesClicked() {
    document.body.innerHTML = `
        <div class="container">
            <img src="YEYYY.jpg" alt="YEYYY!">
            <h1>YEYYY!!!</h1>
        </div>
    `;
}
