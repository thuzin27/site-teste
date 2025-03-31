// Função principal para atualizar o contador
function atualizarTempo() {
    // Data inicial do relacionamento
    const dataInicio = new Date("2024-10-15T00:00:00");
    const agora = new Date();
    
    // Verifica se a data é válida
    if (isNaN(dataInicio.getTime())) {
        document.getElementById("contador").innerText = "Data inválida, verifique o formato";
        return;
    }
    
    // Calcula a diferença de tempo
    const diferenca = agora - dataInicio;
    
    // Se a data for no futuro, exibe uma mensagem apropriada
    if (diferenca < 0) {
        document.getElementById("contador").innerText = "A contagem ainda não começou";
        return;
    }
    
    // Calcula os componentes de tempo
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    // Formato sem espaços entre números e unidades
    const textoCompleto = `${dias}dias, ${horas}horas, ${minutos}minutos, ${segundos}segundos`;
    
    // Texto abreviado para telas menores (também sem espaços)
    const textoAbreviado = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    
    // Obtém o elemento do contador
    const contadorElement = document.getElementById("contador");
    
    // Aplica o texto apropriado com base no tamanho da tela
    if (window.innerWidth <= 480) {
        contadorElement.innerText = textoAbreviado;
    } else {
        contadorElement.innerText = textoCompleto;
    }
}

// Função para verificar o tamanho da tela e atualizar o contador
function verificarTamanhoTela() {
    atualizarTempo();
}

// Atualiza o contador a cada segundo
setInterval(atualizarTempo, 1000);

// Adiciona evento para verificar quando a janela é redimensionada
window.addEventListener('resize', verificarTamanhoTela);

// Chamada inicial para evitar delay de 1s
atualizarTempo();
