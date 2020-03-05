// document.getElementsByTagName('body')[0].onclick = p2.falar
//declarando como objeto, no caso do browser, não é executado corretamente
// o metodo falar invoca o THIS de onde ele foi declarado e não o proprio
//ja com factory nao temos esse problema

class Pessoa {
  constructor(nome){  //é acessado quando executar o new
    this.nome = nome //se tem o this, é publico para ser acessado
  }

  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Joao')
p1.falar()


const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('Joaquim')
p2.falar()