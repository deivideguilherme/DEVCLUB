/*
  useState -> Estado no react / Estado é o mesmo que uma variável
  useRef   -> Faz o mapeamento de um item através de uma referência e assim consegue pegar suas informações
*/

import React, { useState, useRef } from "react";
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
  
  //React Hooks => Ferramentas auxiliares
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  function addNewUser() {
    //Utilizando o Spread Operators (...). Serve para "esparramar" os itens dentro do array
    //Pegando as informações do input através das referências criadas com o useRef()
    setUsers([... users, { 
      id: Math.random(), 
      name:inputName.current.value, 
      age:inputAge.current.value 
    }])
  }

  function deleteUser (userId) {
    //!== significa diferente
    const newUsers = users.filter( user => user.id !== userId)
    setUsers(newUsers);
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

        <ul>
          {/* Mapeando item por item dentro do array 'users'.
          Toda vez que eu for iterar itens dentro do React, tenho que definir uma chave unica para o elemento,
          como foi feito para o <li> = User. */}
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              {/* Por padrão o React não aceita que enviamos paramêtros juntos com a função, mas pra que isso seja possível
              inicio o parâmtro com uma arrow function () =>, ai sim consigo enviar o parâmetro que quero, como no caso o (user.id) */}
              <button onClick={ () => deleteUser(user.id) }>
                <img src={Trash} alt="icone-lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
