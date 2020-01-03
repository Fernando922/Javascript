//primeira estratégia para gerar valor padrão

function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a + b + c;
}

console.log(soma1(2));
console.log(soma1(2, 3));
console.log(soma1(2, 4, 5));
console.log(soma1(0, 0, 0)); //retorna 3, pq zero é considerado false, lembra?

//estratégia 2 para valores aleatorios
console.log('---------------------')
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2(2));
console.log(soma2(2, 3));
console.log(soma2(2, 4, 5));
console.log(soma2(0, 0, 0)); 


//estrategia ecmascript 2015
console.log('----------------')
function soma3(a=1, b=1, c=1){
  return a+b+c
}

console.log(soma2(2));
console.log(soma2(2, 3));
console.log(soma2(2, 4, 5));
console.log(soma2(0, 0, 0)); //retorna 3, pq zero é considerado false, lembra?