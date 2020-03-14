//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)  //function object
const obj2 = new Object
console.log(obj2)

//funções construtoras

function Produto(nome, preco, desc){
  this.nome = nome  //this = atributo publico, atributo sem this é privado
  this.getPrecoComDesconto = () => {
    return preco * [1-desc]
  }

  this.getPreco= () => {
    console.log(preco)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 7443.99, 0.25)

//como o preco é privado, voce nao consegue alterar o valor dele, nem ler
p2.preco = 12222222222222
console.log(p2.preco)
p2.getPreco()


console.log(p2.getPrecoComDesconto(), p1.getPrecoComDesconto())

//Função Factory (é um padrao de projeto) é uma função que retorna um objeto
function criarFuncionario(nome, salarioBase, faltas){
  return {
    nome,salarioBase, faltas,
    getSalario(){
      return (salarioBase / 30 ) * (30 - faltas)
    }
  }
}
const func1 = criarFuncionario('Joaquin', 1500, 2)
console.log(func1.getSalario())


//Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// Uma função que retorna Objeto...
const fromJSON = JSON.parse('{"info":"ola mundo"}')
console.log(fromJSON.info)
