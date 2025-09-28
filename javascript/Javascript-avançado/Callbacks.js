
//Callback é uma função passada como parâmetro para outra função
//Normalmente é usada para garantir que uma função seja executada após outra função ser concluída

function dizerOi(callback) {
    console.log('Olá')
    //Executa o callback
    callback()
}

//Passando uma arrow-function como callback ou seja, uma função anônima
dizerOi(() => {
    console.log('Olá eu sou um callback')
})

//setInterval é uma função nativa do JavaScript que executa uma função repetidamente, com um intervalo de tempo fixo entre cada chamada
//Neste caso, a função passada como callback será executada a cada 100 milissegundos
setInterval(() => {
    console.log('Estou executando')
}, 100)
