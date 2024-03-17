import React from "react";
import People from './assets/people.svg';
import Arrow from './assets/arrow.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles";

//JSX
const App = () => {

  //O return sempre irá retornar HTML
  return (
    //Sempre que utilizo chaves o JSX sabe que vou utilizar elementos Java Script
    <Container>
      <Image alt="logo-imagem" src={ People } />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta" src={ Arrow } /></Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
