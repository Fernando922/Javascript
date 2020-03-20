
console.log(typeof new Array) //object
console.log(typeof []) //object
console.log(typeof Array)  //function


//por boa pratica, nao misture em um array dados de tipos diferentes!
//a estrutura deve ser homogenea


let aprovados = new Array('Bia', 'Carlos', 'Ana')  //nao é recomendado criar um array dessa forma!

aprovados = ['Bia', 'Carlos', 'Ana'] //forma recomendada (literal)
console.log(aprovados[0])  //Bia
console.log(aprovados[1])  //Carlos
console.log(aprovados[2])  //Ana
console.log(aprovados[3])  //undefined :)


aprovados[3] = 'Paulo'  //subistitui o item na posição existente!
aprovados.push('José')
console.log(aprovados.length)
aprovados[15] = 'Pedro'
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'José', <10 empty items>, 'Pedro' ] preenche com undefined :)

aprovados.sort()  //altera o array de verdade!
console.log(aprovados)  // [ 'Ana', 'Bia', 'Carlos', 'José', 'Paulo', 'Pedro', <10 empty items> ]


delete aprovados[1]  //apaga o valor, mas mantem a posição como undefined
console.log(aprovados)  /*[
  'Ana',
  <1 empty item>,
  'Carlos',
  'José',
  'Paulo',
  'Pedro',
  <10 empty items>
]*/

aprovados = ['Bia', 'Carlos', 'Ana']

//altera o array original tb :D
aprovados.splice(1,1, 'Elemento1', 'Elemento2')  //exclui uma posição a partir da primeira e adiciona mais 2, voce pode nao excluir nenhum tb, só passar 0
console.log(aprovados)