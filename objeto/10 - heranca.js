function MeuObjeto() {}

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__ === obj2.__proto__); //true, pq foram criados a partir da mesma funcao construtora
console.log(MeuObjeto.prototype === obj1.__proto__); //true, muda só o nome msm

MeuObjeto.prototype.nome = "Anonimo";
MeuObjeto.prototype.falar = function() {  //arrow function muda o escopo do this, cuidado
  console.log(`Olá meu nome é ${this.nome}`);
};

obj2.nome = 'Rafael'
obj1.falar();
obj2.falar();

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype  //atribui a herança do mesmo jeito
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__=== Object.prototype)
console.log(Object.prototype.__proto__ === null)
