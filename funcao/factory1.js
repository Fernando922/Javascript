//função que retorna um objeto

function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  };
}

const p1 = criarPessoa("Fernando", "de Paula");
console.log(p1.nome);
console.log(p1.sobrenome);


