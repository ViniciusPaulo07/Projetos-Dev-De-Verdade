const numeros = [1, 2, 3, 4, 5]

// forEach - Executa uma função para cada elemento do array
numeros.forEach((elemento) => {
    //console.log(elemento)
})

// map - Retorna um novo array, com a função aplicada em cada elemento do array original
// numeros.map(elemento => elemento * 2)
const arrayDobrado = numeros.map((elemento) => {
    return elemento * 2
})

//console.log(arrayDobrado);

// filter - Retorna um novo array, com os elementos que passaram pela condição
const arrayFiltrado = numeros.filter((elemento) => {
    return elemento % 2 === 0
})

//console.log(arrayFiltrado);

// find - Retorna o primeiro elemento que passou pela condição
const pesquisa = numeros.find((elemento) => {
    return elemento == 5
})

//console.log(pesquisa);

// some - Retorna true ou false, se algum elemento passou pela condição
const some = numeros.some((elemento) => {
    return elemento === 1
})

//console.log(some);

// every - Retorna true ou false, se todos os elementos passaram pela condição
const every = numeros.every((elemento) => {
    return elemento === 10
})

//console.log(every);

//Exercicios
const produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Teclado', preco: 100},
    {nome: 'Mouse', preco: 50},
    {nome: 'Monitor', preco: 800}
]

const buscarProduto = produtos.filter((produto) => {
    return produto.preco < 50
})

const novaLista = produtos.map((produto) => {
    return {
        ...produto,
        nome: produto.nome.toUpperCase()
    }
})

//O forEach é muito util para interar, fazer console.log, etc
novaLista.forEach((produto) => {
    console.log(`Nome: ${produto.nome}, Preço: R$ ${produto.preco}`)
})

const custamMaisde100 = produtos.every((produto) => {
    return produto.preco > 100
})

