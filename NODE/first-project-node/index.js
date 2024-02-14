//Importando express para o projeto
const express = require('express')

//Definindo uma variável para manipular a porta de conexão da aplicação
const port = 3000

/* Criado essa variável somente para facilitar o uso do express,
ao invés de ficar digitando "express()"" toda hora, bastará apenas o "app" */
const app = express()

//Definindo rota de acesso 
app.get('/users', (request, response) => {
    return response.send('Hello Node')
})

/* Definindo uma porta para execução da aplicação. Aceita dois parâmetros
o segundo é opcional */
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
}) 




/* Toda vez que eu for executar o projeto, tenho que fazer isso
através do terminal com o seguinte comando: node index.js 
(node + o nome da página principal do projeto) */

/* Também vale lembrar que qualquer alteração feita no projeto, 
será necessário parar a execução (CTRL + C) e iniciar novamente 
para o que as alterações sejam atualizadas na execução. */

//NUNCA SUBIR PARA O GITHUB A PASTA:    node_modules      !!!!!!!!!