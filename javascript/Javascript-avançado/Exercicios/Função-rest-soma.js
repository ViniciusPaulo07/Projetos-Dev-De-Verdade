function somar (...numeros){
    let total = 0

    numeros.forEach(numeros => total += numeros)
    return total
}

const total = somar(1, 2, 3, 4, 5)
console.log(total)

// Resolução
// const soma = (...numeros) ⇒ numeros.reduce((acc, num) ⇒ acc + num, 0);
// console.log(soma(1, 2, 3, 4, 5));