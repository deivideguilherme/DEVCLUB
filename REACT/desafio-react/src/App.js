import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

import LogoPrincipal from './assets/logo-principal.svg';

import {
    Container,
    Image,
    ContainerItens,
    H1,
    InputLabel,
    Input,
    Button,
} from './styles';

function App() {
    return (
        <Container>
            <Image src={LogoPrincipal} alt='logo-principal' />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>
                <InputLabel>Pedido</InputLabel>
                <Input placeholder='Seu pedido' />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input placeholder='Seu nome' />

                <Button>Novo Pedido <FontAwesomeIcon icon={faBurger} /></Button>
            </ContainerItens>
        </Container>
    )
}

export default App;