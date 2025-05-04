let numero = 5 //Numero para calcularmos o fatorial
let fatorial = 1 //Começamos por 1, multiplicar 0 sempre vai dar 0

//      i = 5    se 5 for menor que 1, ele tira 1
for(let i = numero; i > 1; i--){
    fatorial *= i; //Multiplica fatorial pelo valor atual de i
}

console.log(`O fatorial de ${numero} é ${fatorial}`)
//Não consegui fazer aprender mais sobre o código