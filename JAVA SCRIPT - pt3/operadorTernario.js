/*
OPERADORES TERNÁRIOS --> Utilizado quando a operação a ser realizada é bem pequena, no máximo 1 linha!
                         Para Operações maiores, é utilizada a estrutura padrão de if/else

    ? if (se)
    : else (se não)
    && (if sem else)

*/

const salary = 13000

//Exemplo tradicional

/*
if (salary < 3000){
    console.log('Colaborador Júnior');
}else if (alary >=3000 && salary <10000){
    console.log('Colaborador Senior')
}else {
    console.log('Colaborador Diretor')
}
*/

//Exemplo Operador Ternário if
//Se a operação não tiver o else, substitui o interrogação por &&
salary < 3000 && console.log('Colaborador Júnior')


//Exemplo Operador Ternário if/else
salary < 3000 ? console.log('Colaborador Júnior') : console.log('Colaborador Senior');


//Exemplo Operador Ternário if/else if/else
salary < 3000 ? console.log('Colaborador Júnior') : salary >=3000 && salary <10000 ? console.log('Colaborador Senior') : console.log('Colaborador Diretor')