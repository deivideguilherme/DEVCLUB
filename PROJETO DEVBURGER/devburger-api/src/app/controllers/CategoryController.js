import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';

class CategoryController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
    });

    // Verificando se os dados preenchidos estão corretos, dentro do padrão solicitado, caso não estejam exibe os erros na tela.
    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    //Verificando se o usuário é admin ou não
    const { admin: isAdmin } = await User.findByPk(request.userId);
    if (!isAdmin) {
      return response.status(401).json();
    }

    //Pegando o filename da imagem que será utilizada para as categorias
    const { filename: path } = request.file;

    const { name } = request.body;

    //Verificando junto ao banco se o nome da categoria já existe ou não, antes de criar uma nova categoria
    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    });

    if (categoryExists) {
      return response.status(400).json({ error: 'Categoria já existente!' });
    }

    //Criando a categoria
    const { id } = await Category.create({
      name,
      path,
    });

    return response.status(201).json({ id, name });
  }

  //Listando os produtos
  async index(request, response) {
    const categories = await Category.findAll();

    return response.json(categories);
  }
}

export default new CategoryController();
