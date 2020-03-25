//operador ...   rest(junta) 
// operador spread espalha


//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}  //espalhando dentro desse novo objeto todos os atributos de funcionario (é uma copia)
console.log(clone)


//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)