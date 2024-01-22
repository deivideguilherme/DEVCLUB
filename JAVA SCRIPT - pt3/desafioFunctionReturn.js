//Exercício - Caixa de mercado (Calcula desconto)
const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0 


/*
    Calculando desconto

    R$250,00 --> 7% = R$17,50
        250 * 7 = 1750
        1750 / 100 = 17,5
*/


function calculateDiscount (price, discount){
    const result = (price * discount) / 100
}

calculateDiscount(250, 7)


//Somando valores do array
cart.forEach(value => {
    finalValue += value //Essa representação seria o mesmo que: finalValue = finalValue + value
});