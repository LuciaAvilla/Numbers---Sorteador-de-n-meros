const drawForm = document.getElementById('drawForm');
const screenSetup = document.getElementById('screenSetup');
const screenResult = document.getElementById('screenResult');
const numbersDisplay = document.getElementById('numbersDisplay');
const btnRestart = document.getElementById('btnRestart');

drawForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Interrompe o envio do form para não dar refresh na página

    // Pega os valores exatamente como estão no seu HTML
    const quantity = Number(document.getElementById('quantity').value);
    const min = Number(document.getElementById('min').value);
    const max = Number(document.getElementById('max').value);
    const noRepeat = document.getElementById('no-repeat').checked;

    // --- INÍCIO DAS VALIDAÇÕES ---

    // 1. Verifica se a quantidade é zero ou menor
    if (quantity <= 0) {
        alert("Por favor, escolha uma quantidade de números maior que 0.");
        return; // Para a execução aqui
    }

    // 2. Verifica se o número mínimo é maior ou igual ao máximo
    if (min >= max) {
        alert("O valor de início deve ser menor que o valor final!");
        return;
    }

    // 3. Verifica se há números suficientes para não repetir
    if (noRepeat && quantity > (max - min + 1)) {
        alert("Intervalo insuficiente para sortear números sem repetição.");
        return;
    }


    // Lógica do Sorteio
    const results = [];
    while (results.length < quantity) {
        // Gera o número aleatório dentro do intervalo
        const num = Math.floor(Math.random() * (max - min + 1)) + min;

        if (noRepeat) {
            // LÓGICA 1: Se o Switch estiver LIGADO (true)
            // Só adiciona se o número ainda NÃO estiver no array
            if (!results.includes(num)) {
                results.push(num);
            }
        } else {
            // LÓGICA 2: Se o Switch estiver DESLIGADO (false)
            // Adiciona o número direto, mesmo que ele já exista na lista
            results.push(num);
        }
    }

    // Limpa a tela de resultados anterior
    numbersDisplay.innerHTML = "";

    // Adiciona os novos números sorteados
    results.forEach(num => {
        const span = document.createElement('span');
        span.classList.add('numberBall'); // Usa a sua classe do gradiente
        span.textContent = num;
        numbersDisplay.appendChild(span);
    });

    // TROCA DE TELAS 
    screenSetup.classList.add('hidden');    // Adiciona a classe que esconde
    screenResult.classList.remove('hidden'); // Remove a classe que esconde
});

// Botão Voltar/Reiniciar
btnRestart.addEventListener('click', () => {
    // 1. Reseta o valor do input de quantidade para 0
    document.getElementById('quantity').value = 0;
    screenResult.classList.add('hidden');
    screenSetup.classList.remove('hidden'); // Faz a tela de inputs voltar ao normal
});