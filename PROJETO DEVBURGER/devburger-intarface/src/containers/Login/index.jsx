//Formulário
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import Logo from "../../assets/logo.svg";
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from "./styles";

export function Login() {
  //Validações do formulário
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("O e-mail é obrigatório"),
      password: yup
        .string()
        .min(6, "A senha deve ter ao menos 6 caracteres")
        .required("Digite uma senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await toast.promise(
      api.post("/session", {
        email: data.email,
        password: data.password,
      }),
      //Configurações do toast
      {
        pending: "Verificando seus dados 🧐",
        success: {
          render() {
            setTimeout(() => {
              navigate("/")
            }, 2000);

            return "Seja bem vindo (a)👌";
          },
        },
        error: "E-mail ou senha incorretos 🤯",
      }
    );

    console.log(response);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register("email")} />
            {/* Elvis Operator '?' */}
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            {/* Elvis Operator '?' */}
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
