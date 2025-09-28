// Arrow Functions
// Sintaxe mais curta para escrever expressões de função
// Comum em programação funcional (callbacks, etc)

// Função tradicional
function somarTradicional(a, b) {
    return a + b
}
const somar = (a, b) => {
    return a + b
}

console.log(somar(2, 3))

// Retorno implícito
const subtrair = (a, b) => a - b

console.log(subtrair(5, 2))

const quadrado = a => a * a //quando tem apenas um parâmetro, pode omitir os parênteses

//não possui o this, pois a função arrow não tem contexto
const pessoa = {
    nome: "Tomaz",
    saudacao: () => { //function() {
        console.log(this.nome)
    }
}

pessoa.saudacao()//undefined