/*
MAP => serve para mapear um array
- Cria um novo array, a partir de um array percorrido (array original)
- Cria um novo array, com a mesma quantidade de itens do original
- Aceita 3 parâmetros

    const novoArray = arrayOriginal.map((valorAtual, indice, arrayOriginal) => xxx)

    - item do array   -> Obrigatório
    - index (posição) -> Opcional
    - array completo  -> Opcional
*/

const number = [1, 2, 3, 4, 5, 6, 7]

//Exemplo 1 - Criando novo array dobrando os valores do array original
const double = number.map(item => {
    const newItem = item * 2
    return newItem 
})

console.log(double)

//Exemplo 2 - Exibindo item, index (posição) e array completo
const double2 = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> Item')
    console.log(index + ' -> Index (Posição no array original)')
    console.log(arrayOriginal + ' -> Array Original Completo')
})

//Exemplo 3 - Arrow Function, uma forma resumida e moderna de fazer o exemplo 1
const double3 = number.map((item) => item * 2)

console.log(double3)