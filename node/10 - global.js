// console.log(global)

global.MinhaApp = Object.freeze({
  saudacao(){
    return 'Estou em todos os lugares'
  },
  nome: 'Sistema Legal'
})


/**
 * se criar um objeto global, deixe ele imutavel
 * não é algo que você deve usar muito, apenas em ultimo caso msm!
 */
