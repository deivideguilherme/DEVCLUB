import React from 'react';
import { Button as ContainerButton} from './styles'

function Button(...props) {

    return <ContainerButton {...props}> {props.children} </ContainerButton>
}

export default Button;
