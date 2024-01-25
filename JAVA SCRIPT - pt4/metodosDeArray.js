/*
    - .push()      --> Adiciona mais um item no array
    - .lenght()    --> Mostra o tamanho do array
    - .sort()      --> Organiza o array
    - .delete()    --> Deleta o item de uma posição do array
    - .every()     --> Testa se todos os elementos do array passam em uma condição, retornando 
                       true ou false. 
    - .some()      --> O .some() faz algo parecido com o every(). Porém retorna true, se ao menos 
                       um dos elementos passar no teste
    - .fill()      --> Preenche posições do array como desejarmos. Aceita até 3 parâmetros
    - .find()      --> Usamos esse método quando queremos encontrar algum elemento dentro do array. 
                       Para isso, passamos uma função que retornará true ou false. O primeiro true 
                       que for retornado, irá finalizar a função e retornar o elemento em que estamos.
    - .findIndex() --> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao 
                       invés de retornar o próprio elemento.
    - .concat()    --> Esse método é usado para juntar (concatenar) dois arrays. Ele não altera os 
                       arrays originais, mas cria um novo array com a soma dos dois escolhidos.

    - .includes()  --> Determina se um array 
    - .join        --> Junta todos os elementos de um array


    - slice(fatiar) -> Cria um novo array apartir de uma posição pré estabelecida, nunca altera o 
                       array original.
    - splice       --> Altera o array Original. Recebe 3 parâmetros: qual indice do array vai ser 
                       alterado, quantas posições serão alteradas a partir do índice escolhido e 
                       por fim a informação que substituirá a informação do array original. 
    - pop          --> Remove o último elemento do array
    - shift        --> Remove o primeiro elemento do array


*/

const array1 = [1, 2, 3];
//push
array1.push(4)
//length
console.log(array1.length)

//sort
const array2 = ['Limão', 'Abóbora', 'Caqui'];
array2.sort()
//delete
delete array2[2]
console.log(array2)

//every
const users = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Vanessa', credit: 200 },
];
const isTrue = users.every( user => user.credit > 100 )
console.log(isTrue)

//some
const users2 = [
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 },
    { name: 'Maria', credit: 200 },
];
const isTrue2 = users2.some( user => user.credit > 500 )
console.log(isTrue2)

//fill: até 3 parâmetros --> 1)valor  2)onde começa  3)onde termina
const numbers = [ 1, 2, 3, 4 ];
numbers.fill('Abacate', 0, 2 )
console.log(numbers)

//find
const users3 = [
    { name: 'Davi', credit: 300 },
    { name: 'João', credit: 200 },
    { name: 'Telma', credit: 200 },
];
const findUser = users3.find( user => user.name === 'Telma' )
console.log(findUser)

//findIndex
const findIndexUser = users3.findIndex( user => user.name === 'Telma' )
console.log(findIndexUser)

//Concat
const array3 = ['a', 'b', 'c'];
const array4 = ['d', 'e', 'f'];
const array5 = array3.concat(array4);

console.log(array5)

//join
const elements = ['fire', 'air', 'water'];
const myElements = elements.join(' -> ')
console.log(myElements)
//pop - Elimina o último item do array
elements.pop()
console.log(elements)
//shift - Elimina o primeiro item do array
elements.shift()
console.log(elements)

//slice - Cria um novo array apartir de uma posição pré estabelecida
const names = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando'];
const newArrayNames = names.slice(1, 3)
console.log(newArrayNames)

//splice
/*
Recebe 3 parâmetros: qual indice do array vai ser alterado, quantas posições serão 
alteradas a partir do índice escolhido e por fim a informação que substituirá a informação do 
array original
*/
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
months.splice(1, 1, 'Feb')
console.log(months)
