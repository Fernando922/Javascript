//forma correta, tudo que vc exportar será visivel fora do modulo

let a = 2  //nao é visivel fora do modulo

module.exports = {
  bomDia: 'Bom dia',
  boaNoite(){
    return 'Boa noite!'
  }
}