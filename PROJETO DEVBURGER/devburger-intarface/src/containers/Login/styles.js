import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;
    
    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    background: url('${Background}');
    background-color: #1E1E1E;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    p {
      color: #fff;
      font-size: 18px;
      font-weight: 800;

      a {
        text-decoration: underline;
      }

    }
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #FFF; 

  span {
    color: #9758A6;
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
      width: 100%;
      border: none;
      height: 52px;
      border-radius: 5px;
      padding: 0 16px;
    }

    label {
      font-size: 18px;
      font-weight: 600;
      color: #FFF;
    }
`;

export const Button = styled.button`
    
`;