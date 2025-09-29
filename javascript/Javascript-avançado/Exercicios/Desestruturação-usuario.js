const usuario = {
    nome: "Jorge",
    idade: 31,
    email: "JorgeSeiQueLa@gmail.com"
}

const {nome, idade, email} = usuario
console.log(`${nome} tem ${idade} anos e seu email de contato é ${email}`)

const numeros = [1, 2 ,3 , 4, 5]
const [primeiro, segundo, , quarto] = numeros
console.log(primeiro, segundo, quarto)