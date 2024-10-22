class Pessoa {
    nome: string;
    idade: number;
    genero: string;

    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    mostrarInfo(): string {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu gênero é ${this.genero}.`;
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Arthur Manske", 16, "gay");

// Exibindo as informações da pessoa
console.log(pessoa1.mostrarInfo());
