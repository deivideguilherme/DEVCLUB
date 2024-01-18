/*
    ForEach (item, index, array) --> item, index e array são variáveis.
        item = mostra os itens contido no array, por exemplo a posição 0 do array, onde tem as infomações do Deivide
        index = mostra a posição de cada item do array
        array = mostra o array completo

        Ele não tem o BREAK!!!!!!!!
*/

const users = [
/*Posição [0]*/{name: 'Deivide', age: 32, contact: '(14)99660-9547'},
/*Posição [1]*/{name: 'Carla', age: 31, contact: '(14)99660-9547'},
/*Posição [2]*/{name: 'Helenna', age: 5, contact: '(14)99660-9547'},
/*Posição [3]*/{name: 'Maria', age: 20, contact: '(14)99660-9547'},
]

//Exemplo 1

//forEach sempre trabalha com um array conectado a ele, 
//por isso antes dele foi conectado o array users que foi criado
        // users.forEach(function (item, index, array) { //Os nomes item, index e array, são apenas nomes das variáveis, poderia ser qualquer coisa.
        //     console.log(item)
        //     console.log(index)
        //     console.log(array)
        // });


//Exemplo 2 - Trazendo apenas os nomes contidos no array

//Só lembrando que a expressão '=>' representa uma arrow function, que nada mais é que uma função.
//Fazer assim ou como no exemplo 1, o resultado final é o mesmo!
    // users.forEach((item) => {
    //     console.log(item.name)
    // });



//Exemplo 3 - Trazendo todas as informações contidas no array
    users.forEach((item, index) => {
        console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
    });