const cliente = {
    nome: 'Marta',
    idade: 54,
    compras: ['banana', 'refri', 'arroz']
}
console.log(JSON.stringify(cliente))

const pessoa = JSON.parse(`
{
    "nome":"Marta",
    "idade":54,
    "compras":["banana","refri","arroz"]
}
`)
console.log(pessoa)


// Resolução
const objeto = { nome: "Carlos", idade: 40, cidade: "Rio de Janeiro" };
const jsonString = JSON.stringify(objeto);
console.log(jsonString);

const objetoConvertido = JSON.parse(jsonString);
console.log(objetoConvertido);