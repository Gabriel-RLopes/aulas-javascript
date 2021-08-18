module.exports = class Dados{
   constructor( nome, idade, peso ){
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.dataCadastro = new Date();
   }
}