const filhas = ['Valeska', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhos.concat(filhas, 'fulano', 'fulana', 'mais um')  //pode-se juntar quantos mais quiser
console.log(todos)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))  // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]