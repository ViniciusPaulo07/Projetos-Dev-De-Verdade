/*O async é uma palavra chave que você coloca antes de declarar
 uma função para que essa função se torne um função assincrona*/
/*Uma função assincrona sempre vai retornar uma Promise*/

async function minhaFuncaoAssincrona() {
    return 'Olá eu sou assincrona'
}

const resultado = minhaFuncaoAssincrona()
//console.log(resultado)
.then((resultado) => {
    console.log(resultado)
})


/*O await vai fazer com que a função pare de executar, e ele só vai executar com a
promise estiver completa */
async function buscarDados() {
    const resultado = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (resultado.ok) {
        const json = await resultado.json()
        //console.log(json)
        return json
    } else {
        throw new Error('Deu erro')
    }
}

//console.log(buscarDados())
//Resultado: Promise {<pending>}, A promise não acabou de executar
//Caso a gente queria o retorno ele será uma promise
/*buscarDados().then((resultado) => {
 console.log(resultado)
})*/
/*const resposta = buscarDados()
console.log(resposta)*/
//Resultado: Promise {<pending>}
const resposta = buscarDados()
resposta.then((resultado) => console.log(resultado))