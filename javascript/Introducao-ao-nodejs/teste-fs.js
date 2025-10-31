//fs = file system
const fs = require("fs")

//Cria um arquivo de texto
//fs.writeFileSync('resultado.txt', 'Olá eu estou gravando esse arquivo')

//Cria um diretorio
//fs.mkdirSync('teste')

//Cria um arquivo mostrando o caminho
//fs.writeFileSync('./teste/teste.txt', 'ola estou dentro de teste')

//Lê um arquivo
//const arquivo = fs.readFileSync('./teste/teste.txt')
//console.log (arquivo.toString())

//Excluir arquivos
//fs.unlinkSync('./teste/teste.txt')

const conteudo = fs.readdirSync('./javascript/POO')
console.log(conteudo)