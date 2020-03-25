const pessoa = {
  nome: 'Rebeca',
  idade: 21,
  hobby: 'programar'
}

//função que retorna um array com todas as chaves do objeto em questão
console.log(Object.keys(pessoa))

//função que retorna um array com todos os valores dos atributos
console.log(Object.values(pessoa))

//função que retorna um array com todas as chaves e valores (array dentro de array)
console.log(Object.entries(pessoa))

//olha como seria obter o nome de Rebeca a partir desse array retornado 
const arraypessoa = Object.entries(pessoa)
console.log(arraypessoa[0][1]) //Rebeca

//ou como imprimir todos os dados, tanto chave quanto valor, utilizando a desestruturação
//o parentese mais interno é para a linguagem entender que se trata de uma desestruturação

arraypessoa.forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

/*define um novo atributo para o objeto, a diferença entre fazer assim e fazer da forma literal
é que você pode passar novos parametros para o atributo, como se ele pode ser listável
(enumerable) editavel (writable) e seu valor especifico
*/
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/02/2011'
})


//Object.assign (ECMAScript 2015) junta todos os objetos em um objeto selecionado
const dest = {a: 1}
const b = {b: 2}
const c = {c: 3}
const d = {d: 4}
const a = {a: 13}  //esse vai sobreescrever pq tem o mesmo nome
const obj = Object.assign(dest, b, c, d, a)

console.log(dest)