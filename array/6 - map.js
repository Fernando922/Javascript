//map serve para transformar um array em outro, mantendo o tamanho entre ambos
//nao altera o array original !
const nums = [1, 2, 3, 4, 5];

//for com proposito
const num2 = nums.map(num => num * 2); //valor, index, array sao os parametros
console.log(num2, nums);

const soma10 = e => e + 10;
const triplo = e => e*3
const paraDinheiro = e=> `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


const resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]