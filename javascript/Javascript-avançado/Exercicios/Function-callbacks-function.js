function falarNome(dizerOi) {
    console.log ('Meu nome é Paulo')
    
}

function dizerOi (callback) {
    console.log('Oi')
    callback
}

falarNome(dizerOi());
