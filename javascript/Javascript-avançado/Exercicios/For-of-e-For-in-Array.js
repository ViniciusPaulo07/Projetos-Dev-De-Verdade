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