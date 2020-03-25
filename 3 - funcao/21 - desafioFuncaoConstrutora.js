function Pessoa(nome){
  this.nome = nome

  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new pPssoa('Alberto')
p1.falar()


//clase vs funcao construtora