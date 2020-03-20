//acumula um parametro passado depois de cada função callback

const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: false },
  { nome: "Pedro", nota: 9.8, bolsista: true },
  { nome: "Ano", nota: 8.7, bolsista: false }
];

const resultado = alunos
  .map(a => a.nota)
  .reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 10); //esse ultimo é um valor inicial a ser acumulado (opcional)
console.log(resultado); //45  (soma de tudo)

//Desafio 1: Todos os alunos são bolsistas?

const verificaBolsista = (resultado, bolsista) => resultado && bolsista;

const bolsistas = alunos.map(a => a.bolsista).reduce(verificaBolsista);

console.log("Todos bolsistas:", bolsistas);

//Desafio 2: Algum aluno é bolsista?
const peloMenosUm = (resultado, bolsista) => resultado || bolsista

const peloMenosUmBolsista = alunos.map(a => a.bolsista).reduce(peloMenosUm);

console.log("Pelo menos um:", peloMenosUmBolsista);
