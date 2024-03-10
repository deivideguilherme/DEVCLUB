function mult(firstNumber, seccondNumber) {
    return firstNumber * seccondNumber
}

function sum(firstNumber, seccondNumber) {
    return firstNumber + seccondNumber
}

const person = {
    name: "Deivide",
    age: 32
}

//Exportando as funções e o objeto, tornando eles disponíveis para serem utilizados em outros arquivos se necessário.
module.exports = { mult, sum, person }