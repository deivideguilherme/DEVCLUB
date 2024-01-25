/*
Reduce - Reduzir o array original todo para apenas um item
    -> Retorna um valor (pode ser um novo array, um objeto, string, number, etc)

Aceita até 4 Parâmetros:

const novoArray = arrayOriginal.reduce((acumulador, valorAtual, índice, arrayOriginal) => {
    return xxxx
}, valorInicial)

    1) Acumulador: na primeira iteração terá o valor inicial que daremos a ele.
    Nas demais iterações, terá o valor que iremos acumular nele. Item OBRIGATÓRIO.

    2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO

    3) O índice do elemento atual. Item OPCIONAL

    4) O array original. Item OPCIONAL
*/

//Exemplo 1 - Somando valores e mostrando total
const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0 /*zero é o valor do acumulador*/) //Posso definir qualquer valor para o acumulador ! 

console.log(sum)



//Exemplo 2 - Soma total do valor de mercado das empresas listadas
const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938},
    {name: 'Microsft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundeOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
]

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(marketValue)


//Exemplo 3 - Desafio: calcular o preço do quilo, pelo quilo comprado, por fim mostrar o total da soma dos itens comprados
const cart = [
    {productName: 'Abóbora', pricePerKg: 5, kg: 1},        //R$ 5,00
    {productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},    //R$ 4,615
    {productName: 'Limão', pricePerKg: 1.2, kg: 2},        //R$ 2,40
    {productName: 'Abacate', pricePerKg: 5.4, kg: 1.67},   //R$ 9,018
    {productName: 'Morango', pricePerKg: 11.9, kg: 3},     //R$ 35,70
]

const finalValue = cart.reduce((acc, value) => {
    const calc = value.pricePerKg * value.kg

    return acc + calc
}, 0)
                               //Resultado -> Formatando resultado para o valor da moeda R$ Real
console.log(`Total da compra: ${finalValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
