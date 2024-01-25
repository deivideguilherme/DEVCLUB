/*
MAP    -> Adicionar 10% de valor de mercado a todas as companhias
FILTER -> Filtrar somente companhias fundadas antes de 1990
REDUCE -> Somar o valor de mercado das companhias restantes
*/

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundeOn: 1938 },
    { name: 'Microsft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundeOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976 },
];

//Possivel maneira de resolver o problema 
const newValueCompanies = companies
    //Adicionar 10% de valor de mercado a todas as companhias
    .map((value) => {
        value.marketValue = value.marketValue + value.marketValue * 0.10

        return value
    })
    //Filtrar somente companhias fundadas antes de 1990
    .filter(date => date.foundeOn < 1990)
    
    //Somar o valor de mercado das companhias restantes
    .reduce((acc, sumRemainingCompanies) => acc + sumRemainingCompanies.marketValue, 0)

console.log(newValueCompanies)


//Maneira moderna e mais enxuta de fazer, mesmo resultado!
const addPercent = (value) => {
    value.marketValue = value.marketValue + value.marketValue * 0.10
    return value
}
const filterCompanies = (date) => date.foundeOn < 1990
const calcRemainingCompanies = (acc, calc) => acc + calc.marketValue

const marketValueOldCompanies = companies
.map(addPercent)
.filter(filterCompanies)
.reduce(calcRemainingCompanies, 0)

console.log(marketValueOldCompanies)

//Exercício proposto
/*
MAP    -> Subtrair 10% de valor de mercado a todas as companhias
FILTER -> Filtrar somente companhias fundadas depois de 1980
REDUCE -> Somar o valor de mercado das companhias restantes
*/