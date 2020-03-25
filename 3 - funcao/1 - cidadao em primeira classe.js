//função em JS é First-Class Object (Citizens)
//Higher-order function


//toda função sempre retorna algo, que for undefined

//criar de forma literal 
function fun1(){}


//armazenar em uma variável, função anonima
const fun2 = function () {}

//armazenar em um array
const array = [function(a,b) {return a+b}, fun1, fun2]


const obj = {}
obj.falar = function () {return 'opa'}


const obj2 = {
  falar(){
    console.log('falando')
  }
}
obj2.falar()
console.log(obj.falar())

//passar função como parametro e executar logo em seguida
function run(fun){
  fun()
}

run(function () {console.log('executando')})


//Uma função pode retornar/conter outra função
function soma(a,b){
  return function (c){
    console.log(a+b+c)
  }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)