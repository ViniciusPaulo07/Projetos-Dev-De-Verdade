//O arrays é um tipo de dado que armazena multiplas coisas
//[] Arrays

//              0        1          2     índice
let frutas = ['maçã', 'banana', 'abacaxi']

//O método push adiciona um item, sempre no final do array
frutas.push('pera')

console.log(frutas)

for (let i = 0; i < frutas.length; i++){
    let fruta = frutas[i]
    console.log(i, fruta)
}

//Já o método pop você remove o último item
frutas.pop()
//O shift ele remove o primeiro item
frutas.shift()
//eles retorna dizendo quantos itens tem no array


let numeros = [2, 6, 3, 10, 16]