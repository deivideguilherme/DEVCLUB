//Variável para importar/trazer a dependencia express para o projeto
const express = require('express')

// Variável para porta da aplicação, caso seja necessário mudar a porta
// fica mais fácil alterar a váriável do que o código em si.  
const port = 3000

//Variável para facilitar a chamada do express
const app = express()
//Avisando o express que utilizaremos o formato json para troca de informações
app.use(express.json())


/*
    - Query Params -> meusite.com/users?nome=deivide&age=32   //FILTROS
    - Route Params -> /users/2    //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body -> { "name":"Deivide", "age": }
*/

/*

//Rota - Query Params
app.get('/users', (request, response) => {
    const name = request.query.name
    const age = request.query.age
    
    console.log(name, age)

    return response.json({name: name, age: age})
})

//Route Params
app.get('/users/:id', (request, response) => {
      
    const { id } = request.params
    console.log(id)

    return response.json({id})
})

*/

//Body
app.get('/users', (request, response) => {

    const { name, age } = request.body

    return response.json({ name, age })
})



//Porta da aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})

