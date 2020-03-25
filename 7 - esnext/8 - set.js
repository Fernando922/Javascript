// não aceita repetição/não indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')  //nao adiciona, é repetido

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']  //lucas nao será adicionado novamente
const nomesSet = new Set(nomes)
console.log(nomesSet)


console.log(nomesSet.entries())
console.log(nomesSet.values())