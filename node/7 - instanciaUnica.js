//node faz cache dos modulos
module.exports = {
  valor: 1,
  inc(){
    this.valor++
  }
}

//mesmo conceito de singleton, esta instancia é única, e todas as constantes que forem criadas a partir daqui
//possem o mesmo valor!