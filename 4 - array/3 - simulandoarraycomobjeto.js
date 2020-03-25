const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}

Object.defineProperty(quaseArray, 'toString', {
  value: function() {return Object.values(this)},
  enumerable:false
})

console.log(quaseArray[0])  //só da certo, pq o nome do atributo é zero


const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray)


//nao tente isso em casa, usa o array de uma vez