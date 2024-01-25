/*
Filter - filtra o array, percorre item por item e decide qual valor fará parte do novo array
    const novoArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) => { xxx });

    - Cria um novo array, a partir do array percorrido (arrayOriginal)
    - Cria um novo array apenas com elementos filtrados
    - Aceita 3 parâmetros:
        -> item do array
        -> index
        -> array completo

    1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é cada item,
    um por vez do array que está filtrando. Item OBRIGATÓRIO
    2) O indíce é a posição atual que estamos filtrando. Item OPCIONAL
    3) Uma cópia do array Original. Item OPCIONAL

    A cada item fazemos uma 'pergunta' ao código. Se a resposta for verdadeira naquele item, 
    ele guardará o valorAtual no novo array. Caso seja falso, o valor será descartado!

    return true  -> Item atual passa pro novo array
    return false -> Item atual NÃO passa pro novo array
*/

//Exemplo 1
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]
//Forma moderna e simplificada de fazer
const newList = list.filter( number => number < 100)

/* Forma 2 de fazer
const newList = list.filter( number => {
    if (number > 100) return true
    else return false
})
*/

/* Forma 3 de fazer
const newList = list.filter( number => {
    if (number > 100){
        return true
    } else {
        return false
    }
})
*/
console.log(newList)


//Exemplo 1
const list2 = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]
//Forma moderna e simplificada de fazer
const newList2 = list2.filter( number => {
    //se o número for menor que 100 e se o número for par. Toda vez que divido um número por 2 e não sobra resto, significa que ele é par.
    if (number < 100 && number % 2 === 0) {
        return true
    } else {
        return false
    }
})
console.log(newList2)

//Exemplo 3 - Procurar por uma empresa que valha menos que 200 milhoes, e que tenha sido fundada depois de 1990
const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938},
    {name: 'Microsft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundeOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
]

const newCompanies = companies.filter((company) => {
    if (company.marketValue < 200 && company.foundeOn > 1990) return true
    else return false
})
console.log(newCompanies)