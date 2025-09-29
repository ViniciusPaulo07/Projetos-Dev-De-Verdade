const num1 = [1, 2, 3], num2 = [4, 5, 6]
const combinados = [...num1, ...num2]
console.log(combinados)

const user = {
    nome: "Zé",
    idade: 45,
    email: "Zédobar@gamil.com"
}

const newUser = {
    ...user,
    endereco: "ruas do lado de la"
}

console.log(newUser)