/*
OPERADORES TYPE OF E DELETE

    typeof --> Mostra o Tipo de dado

    delete --> "Deleta" os dados

*/

//Typeof
const myObject = {
    name: 'Deivide',
    age: 30,
    address: 'Otone Correa, 1422'
}

console.log (typeof myObject)


const myNumber = 30
    console.log (typeof myNumber)

const myNumber2 = '30'
    console.log(typeof myNumber2)
    

//Delete
delete myObject.address
    console.log(myObject)

