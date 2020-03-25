//os passos sao independentes entre si, porem a função principal sabe quem é o proximo de quem
/**
 * ex:
 * 
 * func1(){}
 * func2(){}
 * func3(){}
 * 
 * 
 * func main(){
 *  func1()
 * func2()
 * }
 * 
 * 
 * func side(){
 *  func3()
 * func1()
 * }
 */
 //Middleware Pattern (chain of responsability)

 const passo1 = (ctx, next) => {
   ctx.valor1 = 'mid1'
   next()
 }

 const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
 }

 const passo3 = ctx => ctx.valor3 = 'mid3'

 //recursividade
 const exec = (ctx, ...middlewares) => {
   const execPasso = indice => {
     middlewares && indice < middlewares.length &&
     middlewares[indice](ctx, () => execPasso(indice+1))
   }
   execPasso(0)
 }


 const ctx = {}
 exec(ctx, passo1, passo2, passo3) 
 console.log(ctx)
  //passo 3 deve ser sempre o ultimo, pq ele nao tem o next

