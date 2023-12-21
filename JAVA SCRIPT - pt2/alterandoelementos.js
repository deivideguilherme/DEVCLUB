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

const element = document.querySelector("img")

//Exemplo 1
//element.placeholder = "alterando"

//Exemplo2
//element.value = 123

//Exemplo3
console.log(element.src)