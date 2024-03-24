/*
  useState -> Estado no react / Estado é o mesmo que uma variável
  useRef   -> Faz o mapeamento de um item através de uma referência e assim consegue pegar suas informações
  useEffect-> "Efeito colateral", é chamado em 2 momentos:
            1° - quando a aplicação inicia;
            2° - quando um estado react no array de dependência é alterado
            Obs: Recebe 2 parâmetros, uma função anônima e um array
*/

import React, { useState, useEffect } from "react";

import axios from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User
} from "./styles";

//JSX
const Users = () => {
  //Array de usuários

  //React Hooks => Ferramentas auxiliares
  const [users, setUsers] = useState([]);

  //Recuperando e exibindo na tela usuários já cadastrados no back-end
  useEffect(() => {
    async function fetchUsers() {
      const { data: registeredUsers } = await axios.get('http://localhost:3001/users');

      setUsers(registeredUsers);
    }

    fetchUsers()
  }, [])

  //Deletando usuário tanto no front-end quanto no back-end
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    //!== significa diferente
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);
  }

  //O return sempre irá retornar HTML
  return (
    //Sempre que utilizo chaves o JSX sabe que vou utilizar elementos Java Script
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {/* Mapeando item por item dentro do array 'users'.
          Toda vez que eu for iterar itens dentro do React, tenho que definir uma chave unica para o elemento,
          como foi feito para o <li> = User. */}
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              {/* Por padrão o React não aceita que enviamos paramêtros juntos com a função, mas pra que isso seja possível
              inicio o parâmtro com uma arrow function () =>, ai sim consigo enviar o parâmetro que quero, como no caso o (user.id) */}
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="icone-lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button>
          <img alt="seta" src={Arrow} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default Users;
