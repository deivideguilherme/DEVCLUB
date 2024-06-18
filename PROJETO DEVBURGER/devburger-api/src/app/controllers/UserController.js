/**
 * store ==> Cadastrar  / Adicionar
 * index ==> Listar vários
 * show ===> Listar apenas um
 * update => Atualizar
 * delete => Deletar
 */
import { v4 } from 'uuid';
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });

    // Verificando se os dados preenchidos estão corretos, dentro do padrão solicitado, caso não estejam exibe os erros na tela.
    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password, admin } = request.body;

    //Verificando se já existe ou não o e-mail no banco de dados
    const userExists = await User.findOne({
      where: {
        email,
      },
    });

    if (userExists) {
      return response.status(409).json({ error: 'Este e-mail já está cadastrado!' })
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return response.status(201).json({
      id: user.id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController();
