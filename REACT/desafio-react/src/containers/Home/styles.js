import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  height: 100%;

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
  margin-bottom: 40px;

  border-radius: 15px;
  border: none;
  outline: none;

  background: rgba(255, 255, 255, 0.25);
  color: #fff;

  padding-left: 15px;

  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 2px;
`;