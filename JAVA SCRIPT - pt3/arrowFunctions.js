/*
Functions / Funções
    function padrão --> function(){}
    arrow function  --> () => {}

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para criá-la. 
    O que lembra uma flecha, fazendo jus ao nome "Arrow Functions"
*/


//Exemplo 1

//Função padrão
function sayMyName (name){
    return `Seu nome é: ${name}`
}


//Arrow Function --> se a função tiver apenas uma linha, não é necessário colocar o return, pois
//ela por padrão já retorna um valor. 
//Quando tenho apenas um parâmetro é opcional utilizar o parênteses. 
const sayMyName2 = (name) => `Seu nome é: ${name}` 

console.log(sayMyName('Deivide'))
console.log(sayMyName2('Deivide'))



//Exemplo 2

//Função padrão
function sum (number1, number2){
    return number1 + number2
}


//Arrow Function
const sum2 = (number1, number2) => number1 + number2

console.log(sum(1, 2))
console.log(sum2(3, 4))