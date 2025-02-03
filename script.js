let noClickCount = 0;
const noTexts = [
    "Are you sure love?",
    "Aww love naman, sure??",
    "DON'T DO THIS TO MEEEE!!!!",
    "PLEASEEE LOVE LEILAAA!!! HUHUHU"
];

function noClicked() {
    if (noClickCount < noTexts.length) {
        let yesButton = document.getElementById("yesBtn");
        let noButton = document.getElementById("noBtn");

        // Increase Yes button size
        let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentSize * 1.5) + "px";
        yesButton.style.padding = "20px 40px";

        // Change No button text
        noButton.textContent = noTexts[noClickCount];
        noClickCount++;
    } else {
        document.getElementById("yesBtn").style.fontSize = "50px";
        document.getElementById("yesBtn").style.width = "300px";
        document.getElementById("yesBtn").style.height = "100px";
        document.getElementById("yesBtn").textContent = "YES!!!";
        document.getElementById("noBtn").classList.add("hidden");
    }
}

function yesClicked() {
    document.body.innerHTML = `
        <div class="container">
            <img src="YEYYY.jpg" alt="YEYYY!" style="width: 300px;">
            <h1 style="font-family: 'Kissing Season', cursive; color: #d63384;">YEYYY!!!</h1>
        </div>
    `;
}
