import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin: ${(props => props.isback ? '50px 0 30px 0' : '15px 0 30px 0')};

  border: none;

  background: ${(props) => (props.isback ? "#2D2D32" : "#d93856")};
  color: #fff;
  font-weight: 900;
  font-size: 17px;
  line-height: 2.5px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  isback
`;
