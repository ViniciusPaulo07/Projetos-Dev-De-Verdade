//       Ação (valor atribuido)
function pares(array) {
    //.filter() percorre o array Pares.
    //Para cada número, ele verifica se numero % 2 === 0.
    //Se for true, o número entra no novo array.
    //Se for false, o número é descartado.
    //O resultado final é um novo array apenas com os números pares.
    return array.filter(num => num % 2 === 0);
   }
   //Depois ele roda no console, o array que guarda de 1 á 9
   console.log(pares([1, 2, 3, 4, 5, 6, 7, 8, 9]));
   //Não consegui fazer aprender como faz direito