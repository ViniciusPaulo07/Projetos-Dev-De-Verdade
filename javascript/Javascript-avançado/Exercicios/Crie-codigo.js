const numeros = [1, 2, 3, 4, 5]
const [primeiro, ...resto] = numeros
console.log (primeiro)//1
console.log (resto)//2, 3, 4, 5

const dobro = resto.map(num => num * 2)
console.log (dobro)// [4, 6, 8, 10]

const filtrado = resto.filter(num => num > 4)
console.log (filtrado)// [5]


// Resolução
// const numeros = 10, 20, 30, 40, 50;

// const [primeiro, ...resto] = numeros;
// console.log(primeiro);
// console.log(resto.map(num => num * 2));