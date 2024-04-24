import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    //Verificando se os dados de usuário e senha inseridos estão corretos
    const isValid = await schema.isValid(request.body);

    const emailOrPasswordIncorrect = () => {
      response
        .status(401)
        .json({ error: 'Verifique se o e-mail ou senha estão corretos!' });
    };

    if (!isValid) {
      return emailOrPasswordIncorrect();
    }

    //Recebendo dados do request
    const { email, password } = request.body;

    //Verificando se o usuário digitado existe
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return emailOrPasswordIncorrect();
    }

    //'comparePassword' vem do arquivo SessionController
    //Verificando se a senha digitada é a mesma senha cadastrada
    const isSamePassword = await user.checkPassword(password);
    if (!isSamePassword) {
      return emailOrPasswordIncorrect();
    }

    //Retornando as informações do usuário, caso o login tenha sido efetuado com sucesso.
    return response.status(201).json({
      id: user.id,
      name: user.name,
      email: user.mail,
      admin: user.admin,
    });
  }
}

export default new SessionController();
