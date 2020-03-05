const valor = 'Global'

//carrega o contexto de onde foi declarada
function minhaFuncao(){
  console.log(valor)
}

function exec(){
  const valor = 'Local'
  minhaFuncao()
}

exec()  //será impresso Global