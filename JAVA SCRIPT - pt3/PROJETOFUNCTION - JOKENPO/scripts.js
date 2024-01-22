const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachuine())
}

const playMachuine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3) //Math.floor arredonda para baixo o resultado
    
    return choices [randomNumber]
}

const playTheGame = (human, machine) => {

    console.log(`Escolha do Humano: ${human} Escolha da Máquina: ${machine}`)

    //Caso haja Empate
    if (human === machine) {
        result.innerHTML = 'Deu Empate!'
    //Caso o humano ganhe
    }  else if ((human === 'papel' && machine === 'rock') || 
                (human === 'rock' && machine === 'scissors') || 
                (human === 'scissors' && machine === 'paper')) {
                humanScoreNumber++
                humanScore.innerHTML = humanScoreNumber
                result.innerHTML = 'Você Ganhou!'
    //Caso a máquina ganhe
    } else { 
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu Para a Máquina!'
    }
}