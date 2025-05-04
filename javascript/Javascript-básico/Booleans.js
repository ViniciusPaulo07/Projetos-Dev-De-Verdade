//Os Booleans só pode ter dois valores, True(verdadeiro) e False(Falso) ou Sim e Não
//Muito ultilizado para checar condições

let verdadeiro = true
let falso = false

console.log(5 > 6)
console.log(5 < 6)

console.log(5 >= 5)
console.log(5 <= 4)

console.log(5 === 5)

let idade = 16 
let temCarteira = true

//&& as duas tem que ser true para ele passar
//|| uma das duas tem que ser True para passar
if(idade >= 18 || temCarteira) {
    console.log('Pode dirigir')
} else{
    console.log('Não pode dirigir')
}
