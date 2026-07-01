function gerarMegaSena(quantNumeros) {
    if (quantNumeros < 6 || quantNumeros > 9) {
        console.warn('O número deve estar entre 6 e 9. Retornando um array vazio.');
        return [];
    }

    let numerosSorteados = new Set();

    while (numerosSorteados.size < quantNumeros) {
        let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        numerosSorteados.add(numeroAleatorio);
    }

    return Array.from(numerosSorteados).sort((a, b) => a - b);
}

// Função para capturar entrada do usuário e exibir o resultado
document.getElementById('gerarMegaSena').addEventListener('click', function () {
    const quantNumeros = parseInt(document.getElementById('quantNumeros').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(quantNumeros) || quantNumeros < 6 || quantNumeros > 9) {
        resultado.innerHTML = '<p style="color: red;">Por favor, insira um número entre 6 e 9.</p>';
        return;
    }

    const numeros = gerarMegaSena(quantNumeros);
    resultado.innerHTML = `<p>Números sorteados: ${numeros.join(', ')}</p>`;
});
