const pessoa = {
  saudacao: "bom dia",
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar(); // bom dia

const falar2 = pessoa.falar;
falar2(); //vai retornar undefined, pq o falar tem o 'this' que referencia seu proprio objeto

//solução

//função bind entrega a origem o this que existe em sua função!
//é o metódo responsável por amarrar o objeto durante a execução
//a função original nunca será alterada
falar3 = pessoa.falar.bind(pessoa);

falar3();
