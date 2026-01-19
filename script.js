const webhookURL = "https://discord.com/api/webhooks/1462633441928417281/VqRNeGLjfBgY-ho83VXhCvkeQzeMmA70oQOxvvMcVTD_QEcipgxMNDxp4b2OO75zXRKm";

function enviar() {
    const nome = document.getElementById("nome").value;
    const texto = document.getElementById("texto").value;

    if (!nome || !texto) {
        alert("Preencha tudo!");
        return;
    }

    const mensagem = {
        content: 
            "** Novo envio recebido**\n\n" +
            "** Nome:** " + nome + "\n" +
            "** Texto:**\n" + texto
   };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mensagem)
    })
    .then(() => {
        alert("Enviado com sucesso!");
        document.getElementById("nome").value = "";
        document.getElementById("texto").value = "";
    })
    .catch(() => {
        alert("Erro ao enviar ??");
    });
}
