import React, { useState, useRef } from "react";

//Icone hamburger do botão novo pedido
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import LogoPrincipal from "./assets/logo-principal.svg";
import Lixeira from "./assets/lixeira.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  Pedido,
} from "./styles";

function App() {
  //React Hook
  const [pedidos, setPedidos] = useState([]);
  const inputPedido = useRef();
  const inputNome = useRef();

  function novoPedido() {
    //spread operator ...
    setPedidos([
      ...pedidos,
      {
        id: Math.random(),
        pedido: inputPedido.current.value,
        nome: inputNome.current.value,
      },
    ]);
  }

  function deletarPedido(idPedido){
    const novosPedidos = pedidos.filter( pedido => pedido.id !== idPedido )
    
    setPedidos(novosPedidos)
  }

  return (
    <Container>
      <Image src={LogoPrincipal} alt="logo-principal" />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder="Seu pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputNome} placeholder="Seu nome" />

        <Button onClick={novoPedido}>
          Novo Pedido <FontAwesomeIcon icon={faBurger} />
        </Button>

        <ul>
          {pedidos.map((pedido) => (
            <Pedido key={pedido.id}>
              <p>{pedido.pedido}</p> <p>{pedido.nome}</p>
              <button onClick={() => deletarPedido(pedido.id)}>
                <img src={Lixeira} alt="icone-lixeira" />
              </button>
            </Pedido>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
