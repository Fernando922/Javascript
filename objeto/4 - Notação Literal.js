const a = 1
const b = 2
const c = 3


const obj2 = {a,b,c}
console.log(obj2)   // {a: 1, b:2, c:3} lindão



//atribuição zuadona, mas da certo tb
const nomeAtributo = 'nome'
const valorAtributo = 'Fernando'

const pessoa = {[nomeAtributo]: valorAtributo}

console.log(pessoa.nome)

//forma nova e antiga de declarar um metodo dentro de um objeto

const obj = {
  nome: 'Fernando',
  tomarBanho: function(){  //forma antiga
    console.log(`${this.nome} está tomando banho`)
  },

  secar(){  //forma mais recente
    console.log(`${this.nome} está se secando`)
  }
}

obj.secar()