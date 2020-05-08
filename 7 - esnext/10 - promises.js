//trabalhar com processos assincronos que podem ser resolvidos ou rejeitados


function falarDepoisDe(segundos, frase){
  return new Promise((resolve, reject) => {  //resolve função que será chamada quando for resolvida, //reject é quando der ruim
    setTimeout(() => {
      resolve(frase)  //passa para o primeiro .then() SÓ ACEITA UM PARAMETRO CUIDADO, passe um objeto se for o caso
    },segundos * 1000)  //simulando um tempo de processamento
  })
}


falarDepoisDe(3, 'Que legal!!')
.then(frase => frase.concat('!!!!!!?!'))  //retorna para o proximo .then()  pode-se encadear vários .then()
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(new Error('deu ruim ai mano')))




//se  nao chamar a função catch retornará um erro "Unhandled promise rejection"


//outro exemplo:


function api(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 123456) {
        reject("Senha incorreta!");
      } else {
        resolve(`O usuário ${email} está logado`);
      }
    }, 1500);
  });
}

let res = api("dipaula018@gmail.com", 123456)
  .then(console.log)
  .catch(console.log);
