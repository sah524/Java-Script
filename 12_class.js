//Classe Pessoa

class Pessoa {
    //criação da classe
    nome;
    cpf;
    idade;
  }
  
  const andressa = new Pessoa(); //criação de novo objeto
  
  andressa.nome = "Andressa"; //atribuindo valor ao objeto
  andressa.cpf = "077.000.000-35";
  andressa.idade = 22;
  
  console.log(andressa); // impressão
  
  //Classe Carro
  
  class Carro {
    cor;
    marca;
    emplacamento;
  }
  
  const civic = new Carro();
  
  civic.cor = "Preto";
  civic.marca = "Honda";
  civic.emplacamento = "ABC - 1234";
  
  console.log(civic);
  
  //Classe Garrafa
  
  const garrafa = {
    marca: "tupperware",
    cor: "Preta",
    valor: 80,
  
    comprar: function () {
      console.log("Você comprou uma garrafa");
    },
    vender: function () {
      console.log("Você vendeu uma garrafa");
    },
  };
  
  garrafa.comprar();
  garrafa.vender();
  
  //Uso do construct em classe
  
  class Predio {
    endereco;
    nome;
    portaria;
  
    constructor(endereco, nome, portaria) {
      this.endereco = endereco;
      this.nome = nome;
      this.portaria = portaria;
    }
  
    morar() {
      console.log(`Seja bem vindo ao nosso Condomínio ${this.nome}`);
    }
  }
  
  const cei = new Predio("Rua..", "Predio do centro", "2000");
  const riacho = new Predio("Rua..", "Predio do meio", "2000");
  
  cei.morar();
  riacho.morar();