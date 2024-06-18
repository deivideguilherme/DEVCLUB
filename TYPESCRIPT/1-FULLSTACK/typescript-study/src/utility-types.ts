type User = {
  id: number;
  username: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
}

const user: User = {
  id: 1,
  username: 'Deivide',
  password: '123@',
  createdAt: new Date(),
  updateAt: new Date(),
}

//Partial deixa o todas as propriedades de um tipo, personalizável, deve ser usado com cautela!
type partialUser = Partial<User>;

//Omit -> serve para omitir algumas propriedades, caso não seja necessário em dado momento
type NewUser = Omit<User, 'id' | 'username'>;

//Pick -> ao contrário do omitir, ele serve pra pegar, escolher determinada propriedade
type SearchUser = Pick<User, 'username'>;

const searchUser: SearchUser = {
  username: 'Deivide',
};