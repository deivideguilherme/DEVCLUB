/*
    Functions / Funções
        - void (Vazia) --> não retorna nada;
        - return       --> retorna um valor para quem chamou a função
*/


//Exemplo 1 - void
function sum (value, value2) { //Não retorna nada
    console.log(value + value2)
}


function sub (value, value2) {
    console.log(value - value2)
}

sum (20, 10)


//Exemplo 2 - return
function sum (value, value2) { //Retorna o valor para quem a chamou.
    const result = value + value2
    return result
}

const finalResult = sum (20, 10)
console.log('Resultado: ' + finalResult)

/*
Foi criado uma variável 'finalResult' para chamar a função 'sum', e foi enviado dois 
valores para a mesma. A mesma fez o calculo proposto e retornou o valor para a variável
que a chamou, no caso a finalResult. É possível retornar qualquer coisa, uma msg,
um cálculo, etc.
*/

