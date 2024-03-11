/*
    Classes
        -> Serve para padronizar um objeto
*/

// const person = {
//     name: 'Deivide',
//     age: 32, 
//     talk: function() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }


class Person {
    //Esse método constructor é opcional
    constructor( name, age) {
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

        /*
        name;
        age;
        */

        talk(){
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
        }
}

const newPerson = new Person('Deivide', 32)
const newPerson2 = new Person('Carla', 31)
const newPerson3 = new Person('Helenna', 5)

newPerson.talk()
newPerson2.talk()
newPerson3.talk()

/*
newPerson.name = 'Deivide'
newPerson.age = 32
newPerson.talk()
*/