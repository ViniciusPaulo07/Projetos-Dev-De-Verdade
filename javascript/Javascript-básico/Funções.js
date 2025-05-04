//Function executa uma ação que você determinar
function darBoatarde(nome) {
    console.log('Bom dia!', nome)

    console.log('Boa tarde!', nome)

    console.log('Boa noite!', nome)
}

darBoatarde('Vinicius')

//let aqui vai determinar o valor de numeroA e numeroB na função
let resultad = somar(1, 3)
//Fazendo assim a função somar ter os valores 1 e 3
function somar(numeroA, numeroB){
    //Return vai pegar os valores da fução somar
    //E executar a Soma deles gerando o resultado
    return numeroA + numeroB
}
//Que só vai aparecer quando você executalos no console


function calculadora(a, b, operação){
    switch(operação){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
        case 'x':
            return a * b
        case '/':
            return a / b
        default:
            console.log('Operação Inválida')
            return
    }
}

let calculo = calculadora(3, 2, '*')
console.log(calculo)