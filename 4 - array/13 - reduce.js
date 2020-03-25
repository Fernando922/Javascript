Array.prototype.reduce2 = function(callback,valorInicial) {
  const indice = valorInicial ? 0 : 1
  let acumulador = valorInicial || this[0]
  for (let i = indice; i < this.length; i++) {
      acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const alunos = [
  { nome: "Joao", nota: 1, bolsista: true },
  { nome: "Maria", nota: 2, bolsista: false },
  { nome: "Pedro", nota: 3, bolsista: true },
  { nome: "Patricia", nota: 4, bolsista: false },
  { nome: "Carla", nota: 5, bolsista: false },
  { nome: "Josias", nota: 6, bolsista: false }
];

const somaNotas = (acumulador, atual) => acumulador + atual;

const resultado = alunos.map(a => a.nota).reduce2(somaNotas, 21);
console.log(resultado);
