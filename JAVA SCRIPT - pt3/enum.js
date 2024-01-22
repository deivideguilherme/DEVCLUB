/*
randomNumber --> Camel Case 

Quando se trata de ENUM utiliza-se o formato Snake Case
GAME_OPTIONS --> Snake Case
*/

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
} 


//Lemrbando que toda vez que eu quiser ou precisar alterar o nome da variável, 
//automaticamente se aplicará a const GAME_OPTIONS e onde ela estiver inserida
//será trocado automaticamente. 
const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

