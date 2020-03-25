//acumula um parametro passado depois de cada função callback

const alunos = [
  {nome: 'Joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true},
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ano', nota: 8.7, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual){
  console.log(acumulador, atual)
  return acumulador+atual
},10) //esse ultimo é um valor inicial a ser acumulado (opcional)

console.log(resultado)

/**
 * 10 7.3
   17.3 9.2
   26.5 9.8
   36.3 8.7
   45
 */