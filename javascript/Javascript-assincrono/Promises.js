/*Promises ou promessas é um objeto que representa 
o eventual sucesso ou falha de uma operação assincrona*/

/*
const promise = new Promise((resolve, reject) => {
    let deuCerto = false

    if (deuCerto) {
        resolve('Deu certo')
    } else {
        reject('Deu errado')
    }
})

promise
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((resultado) => {
        console.log(resultado)
    })

const esperar = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

esperar.then(() => {
    console.log('Estou rodando depois de 2 segundos');
})
*/


/*
function prepararIngredientes() {
    return new Promise((resolve) => {
        console.log("Preparando Ingredientes...");

        setTimeout(() => {
            console.log("Ingredientes preparados.");
            resolve()
        }, 2000);
    })
    
}

function cozinhar() {
    return new Promise((resolve) => {
        console.log("Cozinhando...");

        setTimeout(() => {
            console.log("Prato Pronto.");
            resolve()
        }, 3000);
    })
}

function servir() {
    return new Promise((resolve) => {
        console.log("Servindo...");

        setTimeout(() => {
            console.log("Prato servido.");
            resolve()
        }, 4000);
    })
}

prepararIngredientes()
    .then(() => cozinhar())
    .then(() => servir())
    .then(() => console.log('Finalizado.'))
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((resposta) => {
        if (resposta.ok) {
            return resposta.json()
        } else {
            //console.log('Deu erro')
            throw new Error('Deu erro')
        }
    })
    .then((respostaEmJSON) => {
        console.log(respostaEmJSON)
    })
    .catch((error) => {
        console.log(error)
    })