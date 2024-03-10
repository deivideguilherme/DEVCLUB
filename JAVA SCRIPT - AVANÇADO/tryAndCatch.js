/*
Try:     
    Try é utilizado para verificação de erros, de uma forma que se um erro for encontrado o servidor não pare de ser executado. 

    Você poderá definir uma mensagem de alerta por exemplo junto ao "catch" sem que interfira no serviço do servidor. 

    O "try" é colocado em torno do código a ser "verificado".

Catch: 
    É onde conterá a mensagem de alerta sobre o possível erro. Seja do lado do cliente ou mesmo do lado do servidor.

Finally (É opcional!): 
    É colocado no final do código, como uma forma de informar que tudo deu certo, exiba alguma mensagem se necessário. 

## Um código só cairá no "catch" e apresentará a mensagem definida em questaõ, se um erro ocorrer, caso o erro não ocorra ele ignorará o "catch". Mas também é possível forçar que um erro aconteça, e assim caia no "catch" e exiba uma msg pré definida. Por exemplo na seguinte situação, um cadastro de usuários onde o usuário cadastrado tenha que ser maior que 18 anos, caso isso não seja verdade ele é forçado a cair no "catch".
*/


//Estrutura do TRY
try {

    //Forçando que um erro aconteça
    if (age < 18) throw new Error ("Só é permitido o cadastro usuários maiores de 18 anos de idade!")

} catch (err){
    //Nesse caso aparecia uma msg de erro com o status 400 referente a um erro do lado do cliente.
    return response.status(400).json({ error:err.message })

} finally {
    console.log("Processo terminado")
}