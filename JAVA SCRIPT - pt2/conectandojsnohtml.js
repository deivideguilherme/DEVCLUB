/*
document = HTML: toda vez que eu quiser mencionar o HTML 
                 dentro javascript eu utilizo o document

getElementById -> Trás apenas um elemento pelo ID
getElementByClassName -> Trás todos os elementos com essa classe
getElementByTagName -> Trás todos os elementos com essa TAG
getElementByName -> Trás todos os elementos com esse NAME

querySelector -> Trás um elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar
*/

//Exemplo1
const input = document.getElementById("main-input")
console.log(input)

//Exemplo2
const elements = document.getElementsByClassName("paragrafh-js")
console.log(elements)

//Exemplo3
const tags = document.getElementsByTagName("p")
console.log(tags)

//Exemplo4
const name = document.getElementsByName("nome-completo")
console.log(name)

//Exemplo5
// --> //procurando o elemento pela TAG
const query = document.querySelector("p") 
console.log(query)

// --> //procurando o elemento pela CLASSE
const query2 = document.querySelector(".paragrafh-js") 
console.log(query2)

// --> //procurando o elemento pelo ID
const query3 = document.querySelector("#main-input")
console.log(query3)

// --> //procurando um elemento espcificado por sua classe
const query4 = document.querySelector("button.main-button")
console.log(query4)

// --> //querySelectorAll - trás todos os elementos com a classe especificada
const query5 = document.querySelectorAll(".main-button")
console.log(query5)