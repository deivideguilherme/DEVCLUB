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

//Exemplo 1 - Quem for vip terá uma pulseira preta, que não for terá uma pulseira verde.
const list = [
    {name: 'Deivide', vip: true},
    {name: 'Carla', vip: false},
    {name: 'Helenna', vip: true},
    {name: 'João', vip: true},
    {name: 'Marli', vip: false},
    {name: 'Neide', vip: true},
    {name: 'Luiz', vip: false},
]

const newList = list.map(user => {
    //Utilizado a condição if (?) else (:) de forma ternária
    const newUser = {
        name: user.name, 
        braceletColor: user.vip ? 'black' : 'green' 
    }

    return newUser
})

console.log(newList)

    /* 
    Poderiamos fazer a codição if/else assim: 
        let braceletColor

        if (braceletColor === vip){
            braceletColor = 'black'
        } else {
            braceletColor = 'green'
        }

        const newUser = {
        name: user.name, 
        braceletColor: braceletColor
    */


//Exemplo 2 - Nota abaixo de 5 = reprovado. Igual ou maior que 5 = Aprovado
const Students = [
    {name: 'Deivide', testGrade: 7},
    {name: 'Carla', testGrade: 5},
    {name: 'Helenna', testGrade: 8},
    {name: 'João', testGrade: 9},
    {name: 'Marli', testGrade: 3},
    {name: 'Neide', testGrade: 2},
    {name: 'Luiz', testGrade: 10},
]

const grade = Students.map(alunos => {
    
    const newGrade = {
        name: alunos.name,
        approvalGrid: alunos.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }

    return newGrade
})

console.log(grade)