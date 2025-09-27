//Undefined é para variaveis que nao foram definidas
let a
console.log(a)

function saudacao() {
    console.log('Ola')
}

let retorno = saudacao()
console.log(retorno)

let pessoa = {
    nome: 'Ana',
    idade: null
}

console.log(pessoa.idade)

//Null é para variaveis que foram definidas, mas nao possuem valor

let variavel = null
console.log(variavel)

console.log(null == undefined) //true
console.log(null === undefined) //false