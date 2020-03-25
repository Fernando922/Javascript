const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); //undefined
console.log(tecnologias.get("react")); //{ framework: false }
console.log(tecnologias.get("react").framework); //false

const chavesVariadas = new Map([
  [function() {}, "Funcao"],
  [{}, "Objeto"],
  [123, "Número"]
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

/**
 * [Function] Funcao
   {} Objeto
   123 Número
 */

console.log(chavesVariadas.has(123)); //true
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);


chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')  //sobreescreve o anterior, chaves nao podem repetir, mas valores podem
console.log(chavesVariadas)
