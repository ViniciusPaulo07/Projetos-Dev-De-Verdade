function saudacao(nome) {
    console.log("Olá", nome)
}

//O que esse modulo está exportando para que outro modulos utilize
/*
module.exports = {
    saudacao,
    nome: "Vinicius Paulo"
}
*/

//exports.saudacao = saudacao
//exports.nome = "Vinicius Paulo"
module.exports = (nome) => {
    console.log("Olá, eu estou em outro modulo")
    console.log(nome);
}