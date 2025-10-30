//console.log("Inicio")

//function rodarDepoisDe2Segundos(callback){
//    setTimeout(() => {
//        callback('Isso aqui acabou de executar')
//    }, 2000)
//}

//rodarDepoisDe2Segundos ((mensagem) => {
//    console.log(mensagem)
//})

//console.log("Fim")

function prepararIngredientes(callback) {
    console.log("Preparando Ingredientes...");

    setTimeout(() => {
        console.log("Ingredientes preparados.");
        callback();
    }, 2000);
}

function cozinhar(callback) {
    console.log("Cozinhando...");

    setTimeout(() => {
        console.log("Prato pronto.");
        callback();
    }, 3000);
}

function servir(callback) {
    console.log("Servindo prato...");

    setTimeout(() => {
        console.log("Prato servido.");
        callback();
    }, 4000);
}

prepararIngredientes(() => {
    cozinhar(() => {
        servir(() => {
            console.log("Finalizado.")
        })
    })
})