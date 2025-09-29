const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

//Para cada numero do array ele vai colocar na variavel numero durante o laço de repetição
for (const numero of numeros) {
    //console.log(numero)
}

const palavra = "JavaScript";
for (const caracter of palavra){
    //console.log(caracter);
}

const produto = {
    nome: 'Notebook',
    preco: '1500',
    temEstoque: true,
    marca: 'Dell'
}

//O For in tem uma função parecida com o for of, a diferença é ele vai interar sobre cada uma das propriedades do objeto
for (const propriedade in produto){
    console.log(propriedade, produto[propriedade]);
}