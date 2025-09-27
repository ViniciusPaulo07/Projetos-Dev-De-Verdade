let numero1 = 10
let texto = `${numero1}`//numero1 + ""(Concatenação)

console.log(texto)
//O typeof mostra o tipo da variável
console.log(typeof texto)


let idade = '13'
let valor = +idade

console.log(valor)
console.log(typeof valor)


let num = 42;
let str = "123";

//Converte número para string e string para número
let numToStr = num.toString();
let strToNum = Number(str);

console.log(numToStr, strToNum);
console.log(typeof numToStr, typeof strToNum)