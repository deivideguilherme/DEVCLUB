/*
  useState -> Estado no react / Estado é o mesmo que uma variável
  useRef   -> Faz o mapeamento de um item através de uma referência e assim consegue pegar suas informações
  useEffect-> "Efeito colateral", é chamado em 2 momentos:
            1° - quando a aplicação inicia;
            2° - quando um estado react no array de dependência é alterado
            Obs: Recebe 2 parâmetros, uma função anônima e um array
*/

import React, { useState, useRef } from "react";

import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

//JSX
const App = () => {
  //Array de usuários

  //React Hooks => Ferramentas auxiliares
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  //Criando novo usuário
  async function addNewUser() {
    /* data é onde contém a informação do usuário criado. Dois pontos
    newUser, estamos apenas dando um nome para o data.
    */
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    /*
    Utilizando o Spread Operators (...). Serve para "esparramar" os itens dentro do array.
    */
    setUsers([...users, newUser]);
    /*
    setUsers é onde está sendo esparramado todos os usuários e mais o novo usuário quando é cadastrado. 
    */
  }

  //O return sempre irá retornar HTML
  return (
    //Sempre que utilizo chaves o JSX sabe que vou utilizar elementos Java Script
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
