import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 342px;
  height: 354px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.div`
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 75px;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 15px;
  border: none;
  margin-bottom: 40px;

  background: rgba(255, 255, 255, 0.25);
  color: #fff;

  padding-left: 15px;

  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin: 15px 0 30px 0;

  border: none;

  background: #d93856;
  color: #fff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2.5px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.6;
  }
`;
