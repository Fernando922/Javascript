Array.prototype.forEach2 = function(func){
  for(let i = 0; i<this.length; i++){
    func(this[i], i, this)
  }
}

function imprimeIndice(nome, indice){
  console.log(`${indice + 1} - ${nome}`)
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(imprimeIndice)  

/*
  1 - Agatha
  2 - Aldo
  3 - Daniel
  4 - Raquel
*/


