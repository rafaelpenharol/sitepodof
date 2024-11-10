let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
    alert(`${nome} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const total = document.getElementById('total');
    listaCarrinho.innerHTML = '';
    let totalPreco = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        totalPreco += item.preco;
    });

    total.textContent = `Total: R$ ${totalPreco.toFixed(2)}`;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let mensagem = 'Meu Pedido:\n\n';
    carrinho.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\nTotal: R$ ${carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2)}`;

    // Redireciona para o WhatsApp com o número 5563981442123
    const url = `https://wa.me/5563981442123?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

}
