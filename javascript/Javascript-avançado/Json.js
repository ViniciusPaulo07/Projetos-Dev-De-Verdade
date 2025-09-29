//JSON - javascript object notation - padrão global de conexões entre os sistemas

const pessoa = JSON.parse(`
{
    "nome":"João",
    "idade":50,
    "hobbies":["Pescard","Escutar musica"],
    "endereco":{
    "rua":"Rua aquela lá", "numero":151}
}
`)

console.log(pessoa.nome)

/*const pessoa = {
    nome: "João",
    idade: 50,
    hobbies: ["Pescard", "Escutar musica"],
    endereco: {
        rua: 'Rua aquela lá',
        numero: 151
    }
}*/

//O parse vai pegar um JSON e converte para um objeto JS
//E o Stringify faz o contrario ele pega objeto JS e converte para JSON
//console.log(JSON.stringify(pessoa))