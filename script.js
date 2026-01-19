const WEBHOOK_URL = "https://discord.com/api/webhooks/1462633441928417281/VqRNeGLjfBgY-ho83VXhCvkeQzeMmA70oQOxvvMcVTD_QEcipgxMNDxp4b2OO75zXRKm";

function enviar() {
  const nome = document.getElementById("nome").value;
  const texto = document.getElementById("texto").value;

  if (!nome || !texto) {
    alert("Preencha tudo");
    return;
  }

  const payload = {
    content: `📩 **Novo envio do site**\n👤 Nome: ${nome}\n📝 Texto:\n${texto}`
  };

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    alert("Enviado pro Discord!");
    document.getElementById("texto").value = "";
  })
  .catch(err => {
    alert("Erro ao enviar");
    console.error(err);
  });
}
