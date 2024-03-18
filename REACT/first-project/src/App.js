import React, { useState } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

//JSX
const App = () => {
  //Array de usuários
  // const users = [];

  //Estado no react / Estado é o mesmo que uma variável
  //React Hooks => Ferramentas auxiliares
  const [users, setUsers] = useState([])
  const [name, setName] = useState()
  const [age, setAge] = useState()

  function addNewUser() {
    //Utilizando o Spread Operators (...)
    setUsers([...users, {id: Math.random(), name, age}])
  }

  function changeInputName(event) {
    setName(event.target.value)
  }

  function changeInputAge(event) {
    setAge(event.target.value)
  }

  //O return sempre irá retornar HTML
  return (
    //Sempre que utilizo chaves o JSX sabe que vou utilizar elementos Java Script
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {/* Mapeando item por item dentro do array 'users'.
          Toda vez que eu for iterar itens dentro do React, tenho que definir uma chave unica para o elemento,
          como foi feito para o <li> = User. */}
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt="icone-lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
