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