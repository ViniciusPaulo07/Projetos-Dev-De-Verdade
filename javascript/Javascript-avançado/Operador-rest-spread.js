const numeros = [1, 2, 3, 4]
const numeros2 = [5, 6, 7, 8]
// Usando o operador spread para combinar arrays
const soma = [...numeros, ...numeros2]

console.log(soma) // [1, 2, 3, 4, 5, 6, 7, 8]

const pessoa = { nome: 'João', idade: 30 };
const endereco = { cidade: 'São Paulo', estado: 'SP' };

// Usando o operador spread para combinar objetos
const combinacao = { 
    ...pessoa,
    ...endereco,
    idade:25 // Sobrescreve a idade
};
console.log(combinacao); // { nome: 'João', idade: 25, cidade: 'São Paulo', estado: 'SP' }

// Usando o operador rest para funções
function somar(...numeros) {
    let total = 0;

    //Usando forEach para somar os números
    //forEach é um método de array que executa uma função para cada elemento do array
    //nessa função, estamos somando cada número do array ao total
    numeros.forEach(numero => total += numero)
    return total
}

const total = somar(1, 2, 3, 4, 5)
console.log(total) // 15


// Usando o operador rest para desestruturação
const num = [1, 2, 3, 4, 5, 6, 7, 8]

// Pegando os dois primeiros elementos do array e o resto em outro array
const [primeiro, segundo, ...resto] = num

console.log(primeiro, segundo) // 1 2
console.log(resto) // [3, 4, 5, 6, 7, 8]

// Desestruturando um objeto e pegando o resto das propriedades
const cliente = { nome: 'Ana', idade: 25, cidade: 'Rio de Janeiro'}

// Pegando a propriedade nome e o resto das propriedades em outro objeto
const { nome, ...restoPessoa} = cliente
console.log(restoPessoa) // { idade: 25, cidade: 'Rio de Janeiro' }