class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

    falar(){
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
    
    apresentacao(){
        console.log(`
        Nome: ${this.nome},
        Idade: ${this.idade},
        Profissão: ${this.profissao}    
    `)}

    aniversario(){
        this.idade += 1
        console.log(`${this.nome} fez aniversário, e agora tem ${this.idade} anos`)
    }
}

const pessoa1 = new Pessoa("João", 30, "Engenheiro")
const pessoa2 = new Pessoa("Carlos", 25, "Enfermeira")
const pessoa3 = new Pessoa("Maria", 25, "Progamador")

pessoa1.aniversario()
pessoa1.aniversario()
pessoa1.aniversario()