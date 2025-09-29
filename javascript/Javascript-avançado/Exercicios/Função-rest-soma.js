function somar (...numeros){
    let total = 0

    numeros.forEach(numeros => total += numeros)
    return total
}

const total = somar(1, 2, 3, 4, 5)
console.log(total)