function enviar() {
  const nome = document.getElementById("nome").value;
  const texto = document.getElementById("texto").value;

  if (!nome || !texto) {
    alert("Preencha tudo");
    return;
  }

  fetch("/enviar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, texto })
  })
  .then(res => res.json())
  .then(() => {
    alert("Enviado!");
    document.getElementById("texto").value = "";
  })
  .catch(() => {
    alert("Erro ao enviar");
  });
}
