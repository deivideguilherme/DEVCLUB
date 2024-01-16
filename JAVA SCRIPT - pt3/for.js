/*
ESTRUTURA DE REPETIÇÃO - LOOP
    FOR (3 Parâmetros)
        1) INICIALIZAÇÃO --> Criar uma variável e colocar um valor inicial pra ela
        2) CONDIÇÃO --> Enquanto for true, o laço continuará iterando
                        Ele irá verificar antes de cada iteração
        3) EXPRESSÃO FINAL --> O que irá ocorrer a cada vez que o nosso laço der uma volta

        for([inicialização]); [condição]; [expressão final]){
            Seu código aqui
        }
*/

//Exemplo 1
for (let i = 0; i < 15; i++){
    console.log(i)
}

//Exemplo 2                                       // Array = [ ]    
const users = ['Maria', 'Aline', 'João', 'Pedro'] // length = 4
                                                  // length (tamanho do array)
//users.length --> Tamanho do meu array
for (let i = 0; i < users.length ; i++){
    console.log(users[i])
}