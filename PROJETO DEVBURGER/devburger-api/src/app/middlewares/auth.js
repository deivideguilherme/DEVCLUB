import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

function authMiddleware(request, response, next) {
  //Verificando se o token é válido na requisição
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Token não fornecido!' });
  }

  const token = authToken.split(' ').at(1);
  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }

      request.userId = decoded.id;
      request.userName = decoded.name;
    });
  } catch (err) {
    return response.status(401).json({ error: 'Token inválido!' });
  }

  return next();
}

export default authMiddleware;
