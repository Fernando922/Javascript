const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']


pilotos.pop()  //massa quebrou o carro! Remove o ultimo elemento do array
console.log(pilotos)  // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')  // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() //remove o primeiro elemento do array
pilotos.unshift('Hamilton')  //adiciona no inicio do array


//splice pode adicionar e remover elementos

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)  // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]


//remover
pilotos.splice(3,1) //massa removido
console.log(pilotos)  // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]


const algunsPilotos = pilotos.slice(2) //retorna novo array (uma fatia)
console.log(algunsPilotos)  //[ 'Bottas', 'Raikkonen', 'Verstappen' ]


const algunsPilotos2 = pilotos.slice(1,4) //nao inclui o indice 4

console.log(algunsPilotos2)  // [ 'Alonso', 'Bottas', 'Raikkonen' ]

const algunsPilotos3 = pilotos.slice(1,5) //agora inclui o ultimo indice
console.log(algunsPilotos3) // [ 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]