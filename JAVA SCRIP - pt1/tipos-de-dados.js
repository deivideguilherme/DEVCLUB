/*
1. Strings - Textos
    - "com aspas duplas", 'simples' ou `crase` (crase no javascript, é conhecida como: Template Literals ou Template String)

    Template Literals - essa string aceita que coloquemos uma variável dentro dela junto com um texto por exemplo


2. Numbers - Números  

3. Boolean - Boleano (true / false)

4. Object - Objetos

5. Null e Undefined

6. Array

7. if & Else - Se, Senão

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
