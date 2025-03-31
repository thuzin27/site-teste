function atualizarTempo() {
    const dataInicio = new Date("2024-10-15T00:00:00");
    const agora = new Date();
    const diferenca = agora - dataInicio;
    
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    document.getElementById("contador").innerText = 
        `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);

// Chamada inicial para evitar delay de 1s
atualizarTempo();
