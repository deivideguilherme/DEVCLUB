//Exercício - Caixa de mercado (Calcula desconto)
const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0 
let finalAmount = 0

/*
    Calculando desconto

    R$250,00 --> 7% = R$17,50
        250 * 7 = 1750
        1750 / 100 = 17,5
*/


//Somando valores do array sem o desconto
cart.forEach((price) => {
   finalAmount = finalAmount + price
});



//Calculando o desconto
function calculateDiscount (price, discount){
    const result = (price * discount) / 100
    return result
}


//Somando valores do array com desconto
cart.forEach((value) => {
    if (value > 30){
        const discount = calculateDiscount (value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount) //Essa representação seria o mesmo que: finalValue += value - discount
    } else {
        finalValueWithDiscount += value
    }
});


//Descobrindo o valor do desconto
const valueDiscount = finalAmount - finalValueWithDiscount


console.log(`O valor total da compra é: R$ ${finalAmount.toFixed(2)}.
Você possui um desconto de: R$ ${valueDiscount.toFixed(2)}.
Total a ser pago: R$ ${finalValueWithDiscount.toFixed(2)}`)