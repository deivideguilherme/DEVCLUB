/*
ESTRUTURA DE REPETIÇÃO - LOOP
    - FOR IN
        Aceita: objetos { }
*/
//Dentro do objeto o name representa a chave, e Deivide representa o valor.
const users = {name: 'Deivide', age: 32, street: 'Rua Otone Correa'}

for (const key in users) {
    console.log(key) //FOR IN dessa maneira, pega apenas as chaves (name, age, street) do objeto!!
}

//Para que eu consiga pegar o valor da chave, posso fazer assim: 
for (const key in users) {
    console.log(`${key} : ${users[key]}`) //fazendo assim, o FOR IN entende que, cada vez que o laço for executado
}                                         //a chave [key] passa a ser o próximo item, sendo uma hora users[name], 
                                          //depois  users [age], e assim por diante, trazendo assim o valor dela.