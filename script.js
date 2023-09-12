var video = document.getElementById("meu-video");

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function setVolume(value) {
    video.volume = value;
}

function exibirResolucaoTela() {
    var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var resolucaoTexto = largura + " x " + altura;

    document.getElementById("resolucao-texto").textContent = resolucaoTexto;
}

// Chamar a função quando a página carregar
window.onload = exibirResolucaoTela;

// Chamar a função quando a janela for redimensionada
window.onresize = exibirResolucaoTela;