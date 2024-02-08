const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () { // quando clica no iniciar câmera,
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false}); // inicializa o mediadevices, pede ao navegador para permitir uso da câmera, e solicitou só vídeo e não áudio
    botaoIniciarCamera.style.display = "none"; // desaparece com o botão de câmera (rostinho feliz)
    campoCamera.style.display = "block"; // exibe a tag <video>
    video.srcObject = iniciarVideo; // exibe o vídeo da webcam no <video>
});

botaoTirarFoto.addEventListener("click", function() { // quando clica no tirar foto
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // criou um canvas 2D com a posição e dimensões do vídeo
    imagemURL = canvas.toDataURL("image/jpeg"); // transformar aquela imagem do canvas em uma URL
    campoCamera.style.display = "none"; // tira o campo da câmera
    mensagem.style.display = "block"; // exibe a mensagem
});

botaoEnviarFoto.addEventListener("click", () => { // no click do enviar foto
    const receberDadosExistentes = localStorage.getItem("cadastro"); // retornou o item que tem a chave cadastro, com todos os dados que já preenchemos anteriormente
    const converteRetorno = JSON.parse(receberDadosExistentes); // para poder consultar o objeto

    converteRetorno.imagem = imagemURL; // criou o atributo imagem no objeto

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno)); // colocou no que já tinha criado as informações atualizadas, adicionando a imagem

    window.location.href = "./abrir-conta-form-3.html"; // encaminha para a página de sucesso
});