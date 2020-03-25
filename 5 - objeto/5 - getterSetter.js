//forma de impedir que os atributos sejam modificados diretamente
//forma de aplicar a regra de negocio interceptando a mudança dos dados

/*por padrao o javascript nao permite sobrecarga de métodos, ou seja, você não pode criar
 dois métodos com o mesmo nome, recebendo atributos diferentes, como no caso de
 criar varios metodos construtores recebdno diferentes tipos de parametros
 */



const sequencia = {
  _valor: 12,  //convenção em js que sugere que ela deve ser privada
  get valor(){  //get valor, se escreve separado mesmo
    return this._valor++
  },

  set valor(valor){  //set valor se escreve separado
    if(valor < 1){
      throw new Error('O valor nao deve ser menor que 1')
    }
    this._valor =  valor
  }
}

console.log(sequencia.valor)
console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 1
console.log(sequencia.valor)

/* ao tentar alterar ou ler qualquer um dos valor acima diretamente, os metodos get e set do objeto serão acionados
  desde que, o atributo possua a convenção do underline e o metodo possua o mesmo nome do atributo correpondente
*/
