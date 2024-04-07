import React from "react";

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
  const pedidos = [
    { id: Math.random(), nome: "x-bacon", preco: 25 },
    { id: Math.random(), nome: "x-egg", preco: 22 },
  ];

  return (
    <Container>
      <Image src={LogoPrincipal} alt="logo-principal" />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="Seu pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Seu nome" />

        <Button>
          Novo Pedido <FontAwesomeIcon icon={faBurger} />
        </Button>

        <ul>
          {pedidos.map((pedido) => (
            <Pedido key={pedido.id}>
              <p>{pedido.nome}</p> <p>R$ {pedido.preco}</p>
              <button><img src={Lixeira} alt="icone-lixeira" /></button>
            </Pedido>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
