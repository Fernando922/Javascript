const contadorA = require('./7 - instanciaUnica')
const contadorB = require('./7 - instanciaUnica')

const contadorC = require('./8 - instanciaNova')()  //retorna a função e executa ao mesmo tempo
const contadorD = require('./8 - instanciaNova')()  //retorna a função e executa ao mesmo tempo


contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)  //é retornado 3 <!DOCTYPE html>


contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)  //valor nao foi alterado