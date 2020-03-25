const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: '1249.98',
  desconto: 0.15
}

fs.writeFile(__dirname + '/18 - arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
})