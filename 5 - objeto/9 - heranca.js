const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha = Object.create(pai)  //define o prototipo, se nao tiver, coloca nulo
filha.nome = 'Fernanda'

console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
  nome: {value: 'Bia', writable: false, enumerable: true}  //enumerable e writable default é false
})

filha2.nome = 'Joana'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha2))



/*o for in trata todas as chaves que pertencem ao objeto, inclusive os herdados pelo 
pai, porém se eu utilizar o método hasOwnProperty eu trato apenas os atributos originais 
deste objeto, como no caso abaixo
*/

for(let key in filha2){
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Herdado do pai: ${key}`)
}