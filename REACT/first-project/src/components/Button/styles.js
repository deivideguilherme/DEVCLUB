import styled from 'styled-components'

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;

  //Se o props for verdadeiro '? = se' o botão fica transparente, senão ': = senão' ficará preto
  background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'}; 
  border-radius: 14px;
  border: ${props => props.isBack ? '1px solid #FFF' : 'none'};

  //Texto interno
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #fff;
  cursor: pointer;

  //Imagem da seta
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${props => props.isBack && 'rotateY(180deg)'};
  }
`;
