const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.90}',
  '{ "nome": "Kit de Lapis", "preco": 3.45}',
  '{ "nome": "Caneta", "preco": 3.45}'
]

// Retornar um array apenas com os preços formatados em real
const paraObjeto = json => JSON.parse(json)
const preco = item => item.preco
const formatarDinheiro = item => `R$ ${item.toFixed(2).replace('.',',')}`


const precos = carrinho.map(paraObjeto).map(preco).map(formatarDinheiro)
console.log(precos)