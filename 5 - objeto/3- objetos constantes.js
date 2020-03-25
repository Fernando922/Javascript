const pessoa = { nome: "ana" };
// pessoa -> 1278nsh <- {...}
pessoa.nome = "joaquim";
console.log(pessoa); //joaquim

// pessoa = {nome: 'carlos'}  //retorna erro

//com let
let pessoa2 = { nome: "joana" };
pessoa2.nome = "joana alterado";
console.log(pessoa2); //joana alterado
pessoa2 = { nome: "carlos" };
console.log(pessoa2); //da certo!!!! pq nao é constante

//com var :(
var pessoa3 = { nome: "Fernando" };
pessoa3.nome = "Fernando alterado";
console.log(pessoa3);
pessoa3 = { nome: "Ferrrrr" };
console.log(pessoa3); // da certo pq nao é constante

//voce altera sempre a referencia que consta na constante, entao sempre da certo
//se for alterar o conteudo da constante vai dar problema

//você pode bloquear que um objeto seja alterado em seus atributos, ou inserir outra coisa nele
// utilizando o Object.freeze(obj)

//um objeto pode ser constante com o object.freeze e pronto!
// voce pode declarar um objeto como constante logo em sua declaração tb

const objetoConstante = Object.freeze({ nome: "carlos" });
