const frutas = ['abacaxi', 'mamao', 'banana', 'coco' ]
for (const fruits of frutas){
    console.log(fruits)
}

const eletronicos = {
    nome: 'Video game',
    valor: 2500,
    marca: 'Nintendo'
}
for (const propriedades in eletronicos){
    console.log(propriedades, eletronicos[propriedades])
}


// Resolução
// const fruas = ["maçã", "banana", "laranja"];
// for (const fruta of frutas) {
//   console.log(fruta);}

// const pessoa = { nome: "Ana", idade: 30, cidade: "São Paulo" };
// for (const propriedade in pessoa) {
//   console.log(`${propriedade}: ${pessoa[propriedade]}`);
// }