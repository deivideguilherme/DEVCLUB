const express = require('express')
const uuid = require('uuid')
const port = 3002
const app = express()
app.use(express.json())

const orders = []
const checkOrderID = (request, response, next) => {
    const { id } = request.params
    
    const index = orders.findIndex( order => order.id === id )

    if( index < 0 ){
        return response.status(404).json({error: "Order not found!"})
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

//Exibindo os pedidos feitos
app.get('/order', (request, response) => {
    return response.json(orders)
})

app.post('/order', (request, response) => {
    const { order, clientName, price } = request.body

    const newOrder = { id:uuid.v4(), order, clientName, price }

    orders.push(newOrder)

    return response.status(201).json(newOrder)
})

//Atualizando Pedido
app.put('/order', checkOrderID, (request, response) => {
    const { order, clientName, price } = request.body
    const index = request.orderIndex
    const id = request.orderId

    const updatedOrder = { id, order, clientName, price }

    orders[index] = updatedOrder

    return response.json(updatedOrder)
})

//Deletando Pedido
app.delete('/order/:id', checkOrderID, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})





app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})