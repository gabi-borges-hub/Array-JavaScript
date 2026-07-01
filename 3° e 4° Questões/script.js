let produtos = [
    { nome: 'Maça', preco: 2.5 },
    { nome: 'Coca Cola', preco: 8 },
    { nome: 'Guarana', preco: 5 },
    { nome: 'Chocolate', preco: 20 },
];

// Função para buscar um produto pelo nome
function buscarProduto() {
    let nomeDigitado = document.getElementById('nomeProduto').value.trim();
    let produtoEncontrado = produtos.find(
        (item) => item.nome.toLowerCase() === nomeDigitado.toLowerCase()
    );

    let resultado = document.getElementById('resultado');
    if (produtoEncontrado) {
        resultado.textContent = `Produto: ${produtoEncontrado.nome}, Preço: R$${produtoEncontrado.preco.toFixed(2)}`;
    } else {
        resultado.textContent = 'Produto não encontrado.';
    }
}

// Função para filtrar produtos com preço menor que R$8,00
function filtrarProdutos() {
    let produtosBaratos = produtos.filter((item) => item.preco < 8);
    let resultado = document.getElementById('resultado');

    if (produtosBaratos.length > 0) {
        resultado.innerHTML = 'Produtos com preço menor que R$8,00:<br>';
        produtosBaratos.forEach((produto) => {
            resultado.innerHTML += `- ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}<br>`;
        });
    } else {
        resultado.textContent = 'Nenhum produto com preço menor que R$8,00 foi encontrado.';
    }
}

// Função para buscar produtos com preço igual a R$20,00
function buscarPrecoExato() {
    let produtosComPrecoExato = produtos.filter((item) => item.preco === 20);
    let resultado = document.getElementById('resultado');

    if (produtosComPrecoExato.length > 0) {
        resultado.innerHTML = 'Produtos com preço igual a R$20,00:<br>';
        produtosComPrecoExato.forEach((produto) => {
            resultado.innerHTML += `- ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}<br>`;
        });
    } else {
        resultado.textContent = 'Nenhum produto com preço igual a R$20,00 foi encontrado.';
    }
}

// Associar as funções aos botões
document.getElementById('buscarProduto').addEventListener('click', buscarProduto);
document.getElementById('filtrarProdutos').addEventListener('click', filtrarProdutos);
document.getElementById('buscarPrecoExato').addEventListener('click', buscarPrecoExato);
