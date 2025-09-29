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