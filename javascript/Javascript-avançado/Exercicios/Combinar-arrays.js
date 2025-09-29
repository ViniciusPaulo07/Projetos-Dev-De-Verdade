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

// Resolução
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado);
const objetoOriginal = { a: 1, b: 2 };
const objetoModificado = { ...objetoOriginal, c: 3 };
console.log(objetoModificado);