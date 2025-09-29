const numbers = [1, 2, 3, 4, 5]

const double = numbers.map((number) => {
    return number * 2
})

console.log(double)

const filterr = numbers.filter((number) => {
    return number % 2 == 0
})

console.log(filterr)


const reducee = numbers.reduce((number1, number2) => {
    return number1 + number2
})
console.log(reducee)


// Resolução
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados);
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);
const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma);