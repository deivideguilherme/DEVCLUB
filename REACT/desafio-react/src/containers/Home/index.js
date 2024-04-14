import React, { useState, useRef } from "react";
import axios from "axios";

//Icone hamburger do botão novo pedido
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import LogoPrincipal from "../../assets/logo-principal.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  //React Hook (useState, useRef, useEffect)
  const [pedidos, setPedidos] = useState([]);
  const inputPedido = useRef();
  const inputNome = useRef();

  //Adicionando novos pedidos
  async function novoPedido() {
    const dataAPI = await axios.post("http://localhost:5000/pedidos", {
      pedido: inputPedido.current.value,
      nomeCliente: inputNome.current.value,
    });

    console.log(dataAPI.data)

    //spread operator ...
    setPedidos([...pedidos, dataAPI.data]);

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

      </ContainerItens>
    </Container>
  );
}

export default App;
