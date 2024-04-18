import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import LogoPedidos from "../../assets/logo-pedidos.svg";
import Lixeira from "../../assets/lixeira.svg"
import { H1 } from "../../components/Title/styles";
import { Button } from "../../components/Button/styles";

import {
  Container,
  Image,
  ContainerItens,
  Pedido,
} from "./styles";

function Pedidos() {
  //React Hook (useState, useRef, useEffect)
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

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

  function voltarPaginaHome(){
    navigate('/');
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

        <Button isback={true} onClick={voltarPaginaHome}> 
          Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Pedidos;
