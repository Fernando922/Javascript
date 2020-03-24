//function declaration (pode ser utilizada antes da declaração)
//o interpretador carrega dos as funções primeiro (apenas as declaradas assim)
function soma(x,y){
  return x+y
}

//function expression (nao pode ser utilizada antes da declaração)
const sub = function(x, y){
  return x-y
}

//named function expression (mais para debug, stacktrace etc. Pouco usada)
const mult = function mult(x,y){
  return x*y
}