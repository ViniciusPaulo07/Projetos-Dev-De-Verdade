let a 
let b = null

if(a === undefined) {
    console.log('A é igual a undefined')
}else if (a == null) {
    console.log('A é igual a null')
}else {
    console.log('O valor já foi definido')
}


if(b === undefined) {
    console.log('B é igual a undefined')
}else if (b == null) {
    console.log('B é igual a null')
}else {
    console.log('O valor já foi definido')
}

//Exercícios - Resolução
let variavelNull = null;
let variavelUndefined;

if (variavelNull) {
  console.log("Variável null tem valor");
} else {
  console.log("Variável null não tem valor");}
if (variavelUndefined) {
  console.log("Variável undefined tem valor");
} else {
  console.log("Variável undefined não tem valor");}