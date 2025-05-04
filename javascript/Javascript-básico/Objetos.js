//O objeto é um tipo de dado um pouco mais complexo
//No Objeto podemos adicionar tambêm outros objetos
//O objeto serve para guardar todas as variáveis dentro de um lugar só
//Atraves do . que a gente acessa a propriedade Ex: idade, do objeto: pessoa
//Sempre colocar a , para separar as variáveis
const pessoa = {
    nome: 'João',
    idade: 50,
    hobbies: ['Pescar', 'Escutar Musica'],
    endereco: {
        rua: 'Rua aquela lá',
        numero: 151
    },
    apresentar() {
        console.log(this.nome, this.idade, this.endereco)
    }
}

pessoa.nome