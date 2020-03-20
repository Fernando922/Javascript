// nunca use arrow function nestes casos, já que o this vai referenciar o contexto em que o mesmo foi criado!
Array.prototype.map2 = function(callback){
  const resultado = []
  for(let i = 0; i< this.length; i++){
    resultado.push(callback(this[i], i, this))
  }
  return resultado
}



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


const precos = carrinho.map2(paraObjeto).map2(preco).map2(formatarDinheiro)
console.log(precos)