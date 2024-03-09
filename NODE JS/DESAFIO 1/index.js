const express = require('express')
const uuid = require('uuid')
const port = 3002
const app = express()
app.use(express.json())

const orders = []


//Middleware 1 - Verifica se o ID existe, caso contrário apresenta mensagem de erro
const checkOrderID = (request, response, next) => {
    const { id } = request.params //Recebendo ID pela url
    
    const index = orders.findIndex( order => order.id === id ) //Vai procurar a posição do objeto e armazenar na variável

    if( index < 0 ){
        return response.status(404).json({error: "Order not found!"})
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

//Middleware 2 - Verifica a url e o metodo utilizado pela requisição
const checkOrderUrl = (request, response, next) => {
    console.log (request.method)
    console.log(request.url)

    next()
}

//Exibindo os pedidos feitos
app.get('/order', (request, response) => {
    return response.json(orders)
})


//Criando novo pedido
app.post('/order', checkOrderUrl, (request, response) => {
    const { order, clientName, price } = request.body
    const status = "Em preparação"
    const newOrder = { id:uuid.v4(), order, clientName, price, status } //Montando o objeto da requisição

    orders.push(newOrder) //Envia o objeto montado para o array orders[]

    return response.status(201).json(newOrder) //Retorna o objeto criado com o status de sucesso (201)
})

//Atualizando Pedido
app.put('/order/:id', checkOrderID, checkOrderUrl, (request, response) => {
    const { order, clientName, price } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updatedOrder = { id, order, clientName, price } //Atualizando o objeto

    orders[index] = updatedOrder //Substituindo o ojeto pelo o objeto atualizado

    return response.json(updatedOrder)
})

//Deletando Pedido
app.delete('/order/:id', checkOrderID, checkOrderUrl, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

//Listando a ordem dos pedidos
app.get('/order/:id', checkOrderID, checkOrderUrl, (request, response) => {
    const index = request.orderIndex

    const viewOrder = orders[index]

    return response.json(viewOrder)
})


//Listando informações e atualizando status do pedido
app.patch('/order/:id', checkOrderID, checkOrderUrl, (request, respose) => {
    const { order, clientName, price } = request.body
    const id = request.orderId
    const index = request.orderIndex
    const orderReady = {
        id, 
        order: orders[index].order,
        clientName: orders[index].orderIndex,
        price: orders[index].price,
        status: "pronto" 
    }

    orders[index] = orderReady

    return respose.json(orderReady)
})


app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})