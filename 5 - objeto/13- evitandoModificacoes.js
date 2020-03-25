//Object.preventExtensions

//impede que o objeto criado receba novas extensoes

const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'promocao'
})

produto.nome ='Borracha'  //alteração ok
produto.descricao = 'Borracha escolar simples'  //nao será aplicado
delete produto.tag  //exclusao ok

console.log(produto)

//Object.seal  -- pode alterar, porem nao pode adicionar nada nem excluir

const pessoa = {nome: 'juliana', idade:35}
Object.seal(pessoa)


pessoa.nome = 'juju'
pessoa.idade = 49
pessoa.orientacao = 's'
delete pessoa.idade
console.log(pessoa)

//resumindo, Object.seal impede alteração e exclusao, Object.preventExtensions impede apenas inclusao


//Object.freeze = bloqueia tudo

const gato = {
  nome: 'Lisbeth',
  idade: 3
}

Object.freeze(gato)

gato.nome = 'mikael'
gato.idade = 15
gato.hobby = 'dormir'
delete gato.idade

console.log(gato)