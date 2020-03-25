//cadeia  de prototipo (prototype chain) 
Object.prototype.nomeBizavo = 'Euclides IV'   //nao faça isso em casa
const avo ={nomeAvo: 'Joaquim Onofre'}
const pai = {__proto__: avo, nomePai: 'Augusto de Souza'}
const filho = {__proto__:pai, nomeFilho: 'Enzo Felipe'}

console.log(filho.nomeFilho, filho.nomePai, filho.nomeAvo, filho.nomeBizavo)  
/*filho herda as atributos dos outros objetos a partir do prototype
//se o objeto pai tiver um atributo com o mesmo nome do atributo do objeto
que está sendo acessado, a prioridade é sempre do escopo mais interno
*/

const carro = {
  velAtual: 0,
  velocidadeMax: 200,

  acelerar(delta){
    if(this.velAtual + delta <= this.velocidadeMax){
      this.velAtual += delta
    }else{
      this.velAtual = this.velocidadeMax
    }
  },
  status(){
    return `${this.velAtual}km/h de ${this.velocidadeMax}km/h`
  }
}

const ferrari ={ 
  __proto__: carro,
  modelo: 'F40',
  velocidadeMax: 340 //shadowing, vc ta sobreescrevendo o valor do pai
}

const volvo = {
  modelo: 'V40',
  status(){
    return `${this.modelo}: ${super.status()}`  //aqui estou chamando o retorno da função status e concatenando
  }
}

Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(20)
console.log(ferrari.status())
console.log(volvo)  //só imprime os atributos e funções que pertencem apenas a este objeto
//nunca será impresso os atributos do pai