const objQualquer = {
  nome: 'lisbeth',
  idade: 3
}

const qqr = JSON.stringify(objQualquer)

const novo  = JSON.parse('{"a": 1, "b": "Maria"}')
console.log(novo.b)

//os atributos devem estar entre aspas duplas, e string tb, o resto nao precisa
const objetoSemSentido = JSON.parse('{"a": 2, "b": 3.4 , "c": false, "d": "Fernando", "e": {"a": 12}, "f": [1,2,3]}')



console.log(objetoSemSentido.e.a)



//na duvida utilize o site https://jsonlint.com/