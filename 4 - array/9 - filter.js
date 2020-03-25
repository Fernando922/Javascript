const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'iPad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
  {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

//retorna um novo array com itens que atendem a condição da função callback

const fragil = p => p.fragil
const caro = p => p.preco >= 500



console.log(produtos.filter(fragil).filter(caro))