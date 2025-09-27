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

console.log (compararLivros(livr1, livr2))


// Resolução do professor
let livr1 = { titul: "Livro 1", autor: "Autor 1", ano: 1980 };
let livr2 = { titul: "Livro 2", autor: "Autor 2", ano: 1990 };

function compararLivrs(l1, l2) {
  return l1.ano < l2.ano ? l1 : l2;
  }
console.log(compararLivrs(livr1, livr2));