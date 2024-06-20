import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

//Rota para Listar usuários já criados
app.get('/usuarios', async (req, res) => {
    const users = await prisma.user.findMany()    

    res.status(200).json(users)
})

//Rota para Criação de usuários
app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json(user)
})


//Rota para Atualizar/Editar usuários
app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})

//Rota para deletar usuários
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
})

app.listen(3000)