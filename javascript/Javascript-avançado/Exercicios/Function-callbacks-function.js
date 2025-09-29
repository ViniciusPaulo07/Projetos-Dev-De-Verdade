function falarNome(dizerOi) {
    console.log ('Meu nome é Paulo')
    
}

function dizerOi (callback) {
    console.log('Oi')
    callback
}

falarNome(dizerOi());

// Resolução
function executarCallback(callback) {
  console.log("Antes da execução");
  callback();
  console.log("Depois da execução");
}
executarCallback(() => console.log("Executando a função callback"));
