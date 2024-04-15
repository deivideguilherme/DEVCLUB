import React, { useState, useEffect } from "react";
import axios from "axios";

import LogoPedidos from "../../assets/logo-pedidos.svg";
import Lixeira from "../../assets/lixeira.svg"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  Pedido,
} from "./styles";

function Pedidos() {
  //React Hook (useState, useRef, useEffect)
  const [pedidos, setPedidos] = useState([]);

  //Exibindo pedidos já feitos
  useEffect(() => {
    async function fetchPedidos(){
      const { data: novosPedidos } = await axios.get('http://localhost:5000/pedidos')

      setPedidos(novosPedidos)
    }

    fetchPedidos()

  },[])

  //Deletando pedidos
  async function deletarPedidos(idPedido){
    await axios.delete(`http://localhost:5000/pedidos/${idPedido}`)

    const novosPedidos = pedidos.filter((pedido) => pedido.id !== idPedido);

    setPedidos(novosPedidos);
  }

  return (
    <Container>
      <Image src={LogoPedidos} alt="logo-pedidos" />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {pedidos.map((pedido) => (
            <Pedido key={pedido.id}>
              <p>{pedido.pedido}</p> <p>{pedido.nomeCliente}</p>
              <button onClick={()=> deletarPedidos(pedido.id)}>
                <img src={Lixeira} alt="icone-lata-de-lixo" />
              </button>
            </Pedido>
          ))}
        </ul>

        <Button>
          Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Pedidos;
