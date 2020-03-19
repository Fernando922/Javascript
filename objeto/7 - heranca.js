const ferrari = {
  modelo: 'f40',
  velMax: 324
}

const volvo = {
  modelo:'v40',
  velMax: 200
}

//prototype é presente dentro de funções e __proto__ dentro de objetos
console.log(ferrari.prototype)  //null
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) //true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) //null

