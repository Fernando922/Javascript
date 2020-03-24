console.log(this === global)  //false
console.log(this === module)  //false
console.log(this === module.exports)  //true
console.log(this === exports)  //true


function logThis(){
  console.log('Dentro de uma função', this === exports, this === module.exports)  //o this aponta para o contexto onde fora criado
  console.log(this === global)  //true


  this.perigo = '...'  //aponta para o global
}



this.perigo = '...'  //torna publico fora do modulo


logThis()