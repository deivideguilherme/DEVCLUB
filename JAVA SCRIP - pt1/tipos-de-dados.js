/*
1. Strings - Textos
    - "com aspas duplas", 'simples' ou `crase` (crase no javascript, é conhecida como: Template Literals ou Template String)

    Template Literals - essa string aceita que coloquemos uma variável dentro dela junto com um texto por exemplo

2. Numbers - Números  
3. Boolean - Boleano (true / false)
4. Object - Objetos
5. Null (Será utilizado quando você propositalmente quiser atribuir um valor nulo) e Undefined (Aparecerá toda vez que um erro for cometido, uma variável inexistente por exemplo)
6. Array - Vetor, Matriz
7. if & Else - Se, Senão
8. Functions
*/

//Exemplo com Template Literals
const myAge = 32

const myDream = 'Programador'

const myString = `Minha idade é ${myAge}.
E meu sonho é ser um ${myDream}!
`
console.log(myString)

//Exemplo com Numbers
const number1 = 32

console.log(number1)

//Exemplo com Object
const deivide = {
    name: "Deivide",
    age: 32,
    address: {
        street: "Otone Corrêa",
        number: 1422,
        city: "Matão",
        State: "SP",
        country: "Brasil"
    } 
}

console.log(deivide.address.street)

//Exemplo de Array - Sempre começaremos a contar da posição zero! 0,1,2..
const myArray = [10, 20, 'Olá', {name: 'deivide', age:32}]
console.log(myArray[0])
//alterando o valor de uma posição dentro do array
myArray[2] = 'Olá Brasil'

const myArray2 = [
    {
        nome: 'user1',
        idade: 10,
        id: null,
    },

    {
        nome: 'user2',
        idade: 20,
        id: null,
    }
]