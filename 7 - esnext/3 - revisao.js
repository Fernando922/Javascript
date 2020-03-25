//Es8: <Object className="values"/><Object className="entries"

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1,2,3]
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Melhorias na Notação Literal

const nome = "Carla";
const pessoa = {
  nome, //nao precisa digitar nome:nome
  ola() {
    //nao precisa digitar ola: function()
    return `Olá! meu nome é ${nome}`;
  }
};
console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {
  chorar(){
    return "imimimimimimimim"
  }
}
class Cachorro extends Animal {
  falar() {
    return "Au au au au";
  }
}

console.log(new Cachorro().falar())
console.log(new Cachorro().chorar())
