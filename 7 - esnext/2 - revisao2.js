//Arrow Function
const soma = (a, b) => a + b; //sempre será anomima, entao deve ser atribuida a uma variavel, constante, etc...
// const soma = (a, b) => {
//   return a + b;
// }; //se tem bloco, deve-se aplicar o return
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind();
lexico1();  //true
lexico2();  //true

//parametro default
function log(texto = "Node") {
  console.log(texto);
}

log(); // Node
log("ola"); //Olá

//operador rest (contexto de função) spread (objeto e array)
function total(...numeros){  //transforma tudo em um array
  let total = 0
  numeros.forEach(n => total += n)  //itera sobre cada item desse array
  return total
}

console.log(total(2,3,4,5,6))  //20
