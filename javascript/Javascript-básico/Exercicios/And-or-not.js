//&& (And ou E)
//|| (Or ou OU)
// ! (Not ou NÃO)

let idade = 16
let temCarteira = true
let podeDirigir = idade >= 18 && temCarteira 
    ? 'Pode Dirigir' 
    : idade >= 18 || !temCarteira 
    ? 'Não Pode Dirigir' 
    : 'Não Tem Carteira'

console.log(podeDirigir)

let rgIdade = 18
let ingresso = true

if(rgIdade >=18 && ingresso){
    console.log('Pode Passar')
}else if(rgIdade >=18 || !ingresso){
    console.log('Não pode passar')
}else{
    console.log('Não tem idade!')
}


let boolTrue = true;
let boolFalse = false;

console.log(boolTrue && boolFalse); // false
console.log(boolTrue || boolFalse); // true
console.log(!boolTrue); // false

