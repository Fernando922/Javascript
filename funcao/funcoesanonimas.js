const soma = function (a,b){
  return a+b
}

const imprimirResultado = function (a,b, operacao=soma){
  console.log(operacao(a,b))
}

imprimirResultado(1,2)

const pessoa = {
  falar: () => {
    console.log('asjaisjaijsaijs')
  }
}


pessoa.falar()