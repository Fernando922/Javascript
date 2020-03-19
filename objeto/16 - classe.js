class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);  //construtor da superclasse (Avo)
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const avo = new Avo()
const pai = new Pai()
const filho = new Filho()


console.log(filho)
