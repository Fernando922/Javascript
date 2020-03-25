{
  var a = 2;
  let b = 3;
  console.log(b); //escopo de bloco por conta do LET
}
console.log(a); //nao tem escopo de bloco

//Template String (aceita quebra de linha)

const produto = "iPad";
console.log(`${produto}
 é  
caro!`);

//Descructuring
const [l, e, ...tras] = "Cod3r";
console.log(l); //C
console.log(e); //o
console.log(tras); // [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]; //pega o primeiro e pula o segundo
console.log(x, y); // 1 3

const { idade: i, nome } = { nome: "Fernando", idade: 28 };
console.log(i, nome); // 28 Fernando
