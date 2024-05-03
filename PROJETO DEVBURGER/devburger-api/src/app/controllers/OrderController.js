import * as Yup from 'yup';
import Order from '../schemas/Order';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';

class OrderController {
  async store(request, response) {
    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });

    // Verificando se os dados preenchidos estão corretos, dentro do padrão solicitado, caso não estejam exibe os erros na tela.
    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { products } = request.body;

    const productIds = products.map((product) => product.id);

    const findProducts = await Product.findAll({
      where: {
        id: productIds,
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name'],
        },
      ],
    });

    const formattedProducts = findProducts.map((product) => {
      const productIndex = products.findIndex((item) => item.id === product.id);

      const newProduct = {
        id: product.id,
        name: product.name,
        category: product.category.name,
        price: product.price,
        url: product.url,
        quantity: products[productIndex].quantity,
      };

      return newProduct;
    });

    const order = {
      user: {
        id: request.userId,
        name: request.userName,
      },
      products: formattedProducts,
      status: 'Pedido Realizado',
    };

    const createdOrder = await Order.create(order);

    return response.status(201).json(createdOrder);
  }

  //Listando todos os pedidos feitos
  async index(request, response) {
    const orders = await Order.find();

    return response.json(orders);
  }

  //Atualizar/Alterar status pedido
  async update(request, response) {
    const schema = Yup.object({
      status: Yup.string().required(),
    });

    //Verificando se os dados preenchidos estão corretos, dentro do padrão solicitado, caso não estejam exibe os erros na tela.
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

    const { id } = request.params;
    const { status } = request.body;

    try {
      await Order.updateOne({ _id: id }, { status });
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }

    return response.json({ message: 'Status atualizado com sucesso!' });
  }
}

export default new OrderController();
