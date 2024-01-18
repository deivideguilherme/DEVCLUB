/*
    - Functions / Funções => Trecho de código que é 
                            executado SOMENTE quando solicitado

    - Funções podem receber argumentos ou parâmtros
*/

//Exemplo Geral
const variavel = "abacatinho"

console.log(variavel)

function nomeNaTela() {
    console.log('Deivide')
}
//Chamando a função
nomeNaTela()


//Exemplo 1 - Variável inserida dentro da função.
//A variável aguardará um valor para ela, e somente
//depois disso ela retornará corretamente o console.log
function sayMyName(name) {
    console.log(`O nome é: ${name}`)
}
sayMyName('Deivide')//Se eu não definir o valor da variável
sayMyName('Carla')//o resultado será Undefined.
sayMyName('Helenna')//É possível reutilizar as funções, quantas vezes eu quiser!



//Exemplo 2 - É possível enviar mais que um parâmetro ou argumento pela função
function sum(value, value2) {
    console.log(value + value2)
}
sum (20, 30)


//Exemplo 3 - Garantindo que o código não será quebrado caso o usuário não envie nenhum valor pela função
//Podemos definir um valor "padrão" para a função, caso seja enviado um valor, a função ignora o valor padrão.
function sayMyName2(name = 'Valor Padrão') {
    console.log(`O nome é: ${name}`)
}
sayMyName2()