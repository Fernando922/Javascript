const fs = require('fs')

const caminho = __dirname + '/15 - arquivo.json'

//sincrono...  (não é recomendado, trava o event-loop)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assicrono (é executado por ultimo pq é assincrono)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./15 - arquivo.json')  //nao se esqueça da extensão do arquivo
console.log(config.db)


fs.readdir(__dirname, (err, arquivos) => {   //__dirname representa seu diretorio atual
  console.log('Contedo da pasta')
  console.log(arquivos)  //é um array com os nomes dos arquivos
})