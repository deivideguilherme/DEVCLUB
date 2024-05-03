import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';

class ProductController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
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

    const { filename: path } = request.file;
    const { name, price, category_id, offer } = request.body;

    const product = await Product.create({
      name,
      price,
      category_id,
      path,
      offer,
    });

    return response.status(201).json(product);
  }

  //Atualizando os produtos
  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
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

    //Verificando se o produto a ser atualizado existe ou não
    const { id } = request.params;
    const findProduct = await Product.findByPk(id);
    if (!findProduct) {
      return response.status(400).json({
        error: 'Certifique-se de que o ID do seu produto esteja correto!',
      });
    }

    //Verificando se há o request.file na requisão
    let path;
    if (request.file) {
      path = request.file.filename;
    }

    const { name, price, category_id, offer } = request.body;

    await Product.update(
      {
        name,
        price,
        category_id,
        path,
        offer,
      },
      {
        where: {
          id,
        },
      },
    );

    return response.status(200).json();
  }

  //Listando os produtos
  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return response.json(products);
  }
}

export default new ProductController();
