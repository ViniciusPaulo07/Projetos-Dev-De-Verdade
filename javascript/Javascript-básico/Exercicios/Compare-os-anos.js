const livro1 = {
    titulo: 'As Cronicas de Narnia',
    autor: 'Lewis',
    anoPublicaçao: 2005
}
const livro2 = {
    titulo: 'Harry Potter',
    autor: 'Rowling',
    anoPublicaçao: 1997
}

function compararLivros (livroA, livroB){
    if(livroA.anoPublicaçao < livroB.anoPublicaçao){
        return `${livroA.titulo} foi publicado primeiro, em ${livroA.anoPublicaçao}`
    }else if (livroA.anoPublicaçao > livroB.anoPublicaçao){
        return `${livroB.titulo} foi publicado primerio, em ${livroB.anoPublicaçao}`
    }else{
        return `Os livros foram publicados no mesmo ano: ${livroA.anoPublicaçao}`
    }
}

console.log (compararLivros(livro1, livro2))