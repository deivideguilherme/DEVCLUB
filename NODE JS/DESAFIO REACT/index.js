const express = require('express')

//Porta da aplicação
const port = 5000
const app = express()
//Avisando o express que vamos trabalhar com JSON
app.use(express.json)

const pedidos = []

//Rota para exibis os pedidos criados
app.get('/pedidos/:id', (request, response) => {
    return response.json(pedidos)
})

app.get('/pedidos', (request, response) => {
    return response.json(pedidos)
})



















app.listen (port, () =>{
    console.log(`🚀 Servidor iniciado na porta ${port}`)
})