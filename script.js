function criarEstrela() {
  const estrela = document.createElement("div");

  estrela.style.position = "fixed";
  estrela.style.left = Math.random() * window.innerWidth + "px";
  estrela.style.bottom = "-5px";
  estrela.style.width = "2px";
  estrela.style.height = "2px";
  estrela.style.background = "white";
  estrela.style.opacity = "0.9";
  estrela.style.zIndex = "1";

  document.body.appendChild(estrela);

  let pos = -5;
  const vel = Math.random() * 1.5 + 0.5;

  const anim = setInterval(() => {
    pos += vel;
    estrela.style.bottom = pos + "px";

    if (pos > window.innerHeight) {
      clearInterval(anim);
      estrela.remove();
    }
  }, 16);
}

setInterval(criarEstrela, 80);
