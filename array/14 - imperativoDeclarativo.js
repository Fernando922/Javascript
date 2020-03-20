const alunos = [
  { nome: "Joao", nota: 7.9 },
  { nome: "Maria", nota: 9.2 }
];

//Imperativo (faz tudo ao mesmo tempo)
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo (melhor)
const getNota = aluno => aluno.nota; //pode ser reutilizado
const soma = (total, atual) => total + atual; //pode ser reutilizado

const total2 = alunos.map(getNota).reduce(soma);

console.log(total2 / alunos.length);

//funções podem ser reutilizadas no modo declarativo
// o foco é como será feito, nao como o que será feito
//voce separa em partes o que deve ser feito (passo a passo)


// você nao está preocupado em como o banco vai retornar, mas sim 
// o quer será retornado

// select codigo, nome, email from clientes where ativo = 1
//SQL é linguagem declarativa
