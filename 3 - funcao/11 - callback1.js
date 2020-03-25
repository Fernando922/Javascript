const fabricantes = ["Mercedes", "BMW", "Ferrari"]

function imprimir(nome, indice){
  console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(item => console.log(item))


fabricantes.forEach(item => item+1)
