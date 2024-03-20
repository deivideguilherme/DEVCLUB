//Variável para importar/trazer a dependencia express para o projeto
import express from 'express';
//Biblioteca de id's instalado no no projeto (--> npm i uuid)
import { v4 } from 'uuid';
import cors from 'cors';

// Variável para porta da aplicação, caso seja necessário mudar a porta
// fica mais fácil alterar a váriável do que o código em si.  
const port = 3001;

//Variável para facilitar a chamada do express
const app = express();
//Avisando o express que utilizaremos o formato json e o cors para todas nossas rotas trocarem informações
app.use(express.json());
app.use(cors());

/*
    - Query Params -> meusite.com/users?nome=deivide&age=32   //FILTROS
    - Route Params -> /users/2    //BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body -> { "name":"Deivide", "age": }

    - GET          -> Buscar informações no back-end
    - POST         -> Criar informações no back-end
    - PUT / PATCH  -> Alterar / atualizar informações no back-end
    - DELETE       -> Deletar informações no back-end

    - Middleware   -> INTERCEPTADOR: Tem o poder de parar ou alterar dados da requisição
*/
const users = []


//Middleware
const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex( user => user.id === id) 

    if(index < 0){
        return response.status(404).json({ error: "User not found!" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

// Lendo os usuários
app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body

    const user = { id:v4(), name, age }
    
    // Adicionando o usuário criado dentro do array users[]
    users.push(user)

    return response.status(201).json(user)
})

app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex //posição do array onde está o usuário
    const id = request.userId

    const updatedUser = { id, name, age }

    users[index] = updatedUser
    
    return response.json(updatedUser)
})

app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json() //retornando apenas um status de sucesso, sem conteúdo algum
})



//Porta da aplicação
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})
