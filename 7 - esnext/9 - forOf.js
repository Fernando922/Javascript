//for in (itera sobre indices)
//for of (itera sobre valores)

for(let letra of "Cod3r"){
  console.log(letra)  //imprime cada letra
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
  console.log(i)  // 0,1,2
}

for(let i of assuntosEcma){
  console.log(i)   //Map, set, Promise
}

const assuntosMap = new Map([
  ['Map', {abordado: true}],
  ['Set', {abordado: true}],
  ['Promise', {abordado: false}],
])

for(let assunto of assuntosMap){
  console.log(assunto)
}

for(let chave of assuntosMap.keys()){
  console.log(chave)
}

for(let chave of assuntosMap.values()){
  console.log(chave)
}

for (let [ch, vl] of assuntosMap.entries()){  //desestruturação
  console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
  console.log(letra)
}




