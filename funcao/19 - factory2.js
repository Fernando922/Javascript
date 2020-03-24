function criarProduto(nome, preco) {
  return { nome, preco, desconto: 0.1 };
}

const prod1 = criarProduto('Carro', 1000)

console.log(prod1)

console.log(prod1['preco'])

