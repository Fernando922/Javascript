function soma(){
  let soma = 0

  for(i in arguments){  //toda função tem o array interno de arguments disponível
    soma+= arguments[i]  //ele é um array que comporta todos os parametros passados para a função
  }

  return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(2,3,4,5,5,6))

//da certo, mas não é boa pratica

console.log(soma(1,2,3,'teste'))
console.log(soma('a','b','teste'))