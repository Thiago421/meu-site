alert("script.js carregou");


const starsContainer = document.querySelector(".stars");
const totalStars = 120;

for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("span");

    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    star.speed = Math.random() * 0.6 + 0.2;

    starsContainer.appendChild(star);
}

function animateStars() {
    document.querySelectorAll(".stars span").forEach(star => {
        let top = parseFloat(star.style.top);
        top -= star.speed;

        if (top < 0) {
            top = window.innerHeight;
            star.style.left = Math.random() * window.innerWidth + "px";
        }

        star.style.top = top + "px";
    });

    requestAnimationFrame(animateStars);
}

animateStars();

function enviar() {
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("texto").value;

    if (!nome || !texto) {
        alert("Preencha tudo!");
        return;
    }

    alert("Enviado por " + nome);
}
