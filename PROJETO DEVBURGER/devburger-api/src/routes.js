import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

const upload = multer(multerConfig);

//Rota de criação de usuário
routes.post('/users', UserController.store);
//Rota de sessão de usuário
routes.post('/session', SessionController.store);

//Rota de autenticação, faz com que todas as rotas abaixo desse trecho de código, necessitarão passar por esse middleware que é resposável pela autenticação da aplicação.
routes.use(authMiddleware);

//Rota de criação, listagem e atualização de produtos
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);

//Rota de criação e listagem de categorias
routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);

//Rota de criação, listagem e atualização de pedidos
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

export default routes;
