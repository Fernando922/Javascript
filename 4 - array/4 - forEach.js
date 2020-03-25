const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


function imprimirComIndice(nome, indice){
  console.log(`${indice+1} -  ${nome}`)
}

const exibirAprovados = aprovado => console.log(aprovado)


//diferentes formas de fazer a mesma coisa
aprovados.forEach(imprimirComIndice)
aprovados.forEach(exibirAprovados)
aprovados.forEach(nome => console.log(nome))


aprovados.forEach((nome, index, array) => {
  console.log(array)  //é o proprio array este ultimo parametro
})