const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Olá mundo, Meu nome é Vinicius Paulo futuro desenvolvedor')
})

app.get('/teste', (req, res) => {
    return res.send('Rota de teste')
})

app.listen(3000, () =>{
    console.log('Escutando na porta 3000')
})