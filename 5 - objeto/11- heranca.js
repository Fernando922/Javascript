String.prototype.reverse = function (){
  return this.split('').reverse().join('')
}

String.prototype.gritar = function(){
  return 'AAAAAAAAAAAAAAAAAAAAAAAA'
}

console.log('mae'.reverse())
console.log('mae'.gritar())

Array.prototype.first = function (){
  return this[0]  //this vc ta acessando a propria instancia!
}

console.log(['a', 'b', 'c'].first())


//nao é recomendado adicionar ou alterar metodos já existentes!!