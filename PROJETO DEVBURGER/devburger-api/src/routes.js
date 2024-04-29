import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

const upload = multer(multerConfig);

//Rota de criação de usuário
routes.post('/users', UserController.store);
//Rota de sessão de usuário
routes.post('/session', SessionController.store);

//Rota de autenticação, faz com que todas as rotas abaixo desse trecho de código, necessitarão passar por esse middleware que é resposável pela autenticação da aplicação.
routes.use(authMiddleware);

//Rota de criação de produtos
routes.post('/products', upload.single('file'), ProductController.store);
//Rota de listagem de produtos
routes.get('/products', ProductController.index);

//Rota de criação de categorias
routes.post('/categories', CategoryController.store);
//Rota de listagem de categorias
routes.get('/categories', CategoryController.index);

export default routes;
