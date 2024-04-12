const express = require('express');
const uuid = require('uuid');
const cors = require ('cors');

//Porta da aplicação
const port = 5000;
const app = express();
//Avisando o express que vamos trabalhar com JSON
app.use(express.json());
app.use(cors());


const pedidos = [];

//Middleware, ele é chamado antes da rota, tem o poder de parar a rota e também pode fazer alterações
const checkIdPedido = (request, response, next) => {
  const { id } = request.params;

  //Encontrando o pedido dentro do array ('findIndex'), e retornando a posição ('index') em que o pedido está
  const index = pedidos.findIndex((user) => user.id === id);

  if (index < 0) {
    //Retornando status de pedido não encontrado, ID não existe
    return response.status(404).json({ error: "Pedido não encontrado" });
  }

  request.indexPedido = index;
  request.idPedido = id;

  next();
};

//Rota para exibir todos os pedidos criados
app.get("/pedidos", (request, response) => {
  return response.json(pedidos);
});

//Rota para criar novos pedidos
app.post("/pedidos", (request, response) => {
  const { pedido, nomeCliente } = request.body;

  const novoPedido = { id: uuid.v4(), pedido, nomeCliente };

  pedidos.push(novoPedido);

  //Enviando um status 201 que significa 'criado com sucesso'
  return response.status(201).json(novoPedido);
});

//Rota para atualizar um pedido criado mediante ao seu ID
app.put("/pedidos/:id", checkIdPedido, (request, response) => {
  const { pedido, nomeCliente } = request.body;
  const index = request.indexPedido;
  const id = request.idPedido;

  const atualizaPedido = { id, pedido, nomeCliente };

  pedidos[index] = atualizaPedido;

  return response.json(atualizaPedido);
});

//Rota para deletar os pedidos criados
app.delete("/pedidos/:id", checkIdPedido, (request, response) => {
  const index = request.indexPedido;

  //'splice' serve para deletar itens no array a partir do índice (esse índice to pegando com o findIndex), recebe dois parâmetros: o indice que quero apagar, e a posição a ser apagada
  pedidos.splice(index, 1);

  return response.status(204).json({ message: "Pedido deletado!" });
});

app.listen(port, () => {
  console.log(`🚀 Servidor iniciado na porta ${port}`);
});
