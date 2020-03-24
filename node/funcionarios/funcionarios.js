const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const encontraChinesas = funcionario =>
  funcionario.pais === "China" && funcionario.genero === "M";
const encontraMenor = (func, funcAtual) => {
  return func.salario <  funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data;

  const chinesas = funcionarios.filter(encontraChinesas);
  const menorSalario = chinesas.reduce(encontraMenor);
  console.log(menorSalario);
});
