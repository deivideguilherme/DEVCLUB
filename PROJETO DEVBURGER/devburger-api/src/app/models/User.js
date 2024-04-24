import { Sequelize, Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    //Utilizando o 'bcrypt' para criptografar a senha criada pelo usuário
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  //Fazendo a comparação da senha --> Esse trecho de código é buscado e utilizado dentro de 'User.js'
  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
