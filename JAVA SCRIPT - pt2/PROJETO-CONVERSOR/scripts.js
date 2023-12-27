//Sempre que eu quiser testar a conectividade do JS com meu HTML, uso o console.log() é uma boa prática pra ir testando se tudo está correndo bem no código

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

//função para conversão dos valores de Real para Dólar
function convertValues() {
    //pegando o valor que é digitado dentro do input
    const inputCurrencyValue = document.querySelector(".input-currency").value; //Defini que não quero o input inteiro, mas apenas o valor de dentro dele

    const currencyValueToConvert = document.querySelector(
        ".currency-value-to-convert"
    ); //valor em real
    const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

    //variável do valor fictício do dólar e do euro
    const dolarToday = 5.2;
    const euroToday = 6.2;

    //condições para a conversão do valor digitado no input
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    /*alterando o valor do <p class="currency-value-to-convert"> para o valor que será salvo na variável inputCurrencyValue, 
      já formatando para a moeda do Brasil*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/img/dolar.png"
    }
    
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"
    }

    convertValues()
}

//ação do seletor de moeda
currencySelect.addEventListener("change", changeCurrency)

//ação do botão de conversão
convertButton.addEventListener("click", convertValues);
