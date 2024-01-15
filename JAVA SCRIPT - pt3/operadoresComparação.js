/*
OPERADORES DE COMPARAÇÃO

    ==  --> Igual / Compara o valor mas não o tipo
    === --> Totalmente Igual / Compara o valor e o tipo

    !=  --> Diferente / Compara o valor mas não o tipo
    !== --> Totalmente Diferente / Compara o valor e o tipo
 
    >   --> Maior
    <   --> Menor

    >=  --> Maior ou Igual
    <=  --> Menor ou Igual

*/

//Comparando se os valores são iguais, mas não o tipo
const number1 = 30     //número
const number2 = '40'   //caractere

if (number1 == number2){
    console.log('Eles são iguais')
} else {
    console.log('Não são iguais')
}


//Comparando se os valores e o tipo são iguais
const number3 = 30     //número
const number4 = 30     //número

if (number3 === number4){
    console.log('Eles são iguais')
} else {
    console.log('Não são iguais')
}


//Comparando se os valores diferentes, mas ignora o tipo
const number5 = 30     //número
const number6 = 40     //número

if (number5 != number6){
    console.log('Sim, são diferentes')
} else {
    console.log('Não, não são diferentes')
}


//Comparando se os valores e o tipo são diferentes 
const number7 = 30     //número
const number8 = 30     //número

if (number7 !== number8){
    console.log('Sim, são diferentes')
} else {
    console.log('Não, não são diferentes')
}


//Maior | Menor | Maior ou Igual | Menor ou Igual
const number9 = 40
const number10 = 50

console.log (number9 > number10)
console.log (number9 < number10)
console.log (number9 >= number10)
console.log (number9 <= number10)

