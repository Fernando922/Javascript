const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = "Genérica" //nao é boa pratica
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto'] //só assim que vc acessa já que tem espaços

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua qualquer',
      numero: 123
    }
  },
  condutores: [{
    nome: 'junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorSeguro: () => {
    console.log('seguro 5000/ano')
  }
}

carro.proprietario.endereco.numero = 1000
console.log(carro)
delete carro.condutores
console.log(carro.condutores)  //retorna undefined
console.log(carro.condutores.length)  //retorna erro, algo indefinido nao tem propriedade
