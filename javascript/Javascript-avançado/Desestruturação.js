const pessoa = {
    nome:"João",
    idade: 30,
    cidade: "São paulo"
};

//Desestruturação de objeto
//Extrair valores de um objeto e atribuir a variáveis, no caso anos
const { idade: anos } = pessoa;
console.log(anos);

const numeros = [1, 2, 3, 4];
//Desestruturação de array
const [primeiro, segundo, , quarto] = numeros;
console.log(primeiro, segundo , quarto);


//Desestruturação em parâmetros de função
function apresentar({ nome, idade }) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar(pessoa);


//Desestruturação de retorno de função
function somarEMultiplicar(a, b) {
    return [a + b, a * b];
}

//Aqui estamos desestruturando o array retornado pela função em duas variáveis: soma e multiplicacao
const [soma, multiplicacao] = somarEMultiplicar(2, 3);
console.log(soma, multiplicacao);