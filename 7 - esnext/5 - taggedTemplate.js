// tagged templates - processa o template dentro de uma função

function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra String";
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}`);
/**
 * [ '', ' está ', '' ]  o que nao foi interpolado
   [ 'Gui', 'Aprovado' ]  o que foi interpolado
   Outra String  isso é impresso no final
 */

//é util para aplicar mascara em valores monetários
function emReal(_, valor) {
  return `R$ ${valor}`;
}
const valor = 15.56;
console.log(emReal`${valor}`);  //R$ 15.56

//ordem das partes e valores (importante)
//  1     3       5
//[ '', ' está ', '' ]  

//   2       4
//[ 'Gui', 'Aprovado' ] 
