function generateNumber(){
    const inputEnter = Math.ceil(document.querySelector('.enter').value) //Arredondando número pra cima
    const inputAnd = Math.floor(document.querySelector('.and').value) //Arredondando número pra baixo
    
    const result = Math.floor(Math.random() * (inputAnd - inputEnter + 1)) + inputEnter;

    if (inputAnd <= inputEnter){
        alert('Valor não permitido! Digite um valor maior que o primeiro valor digitado.')
    } else {
        alert(result);
    }
}