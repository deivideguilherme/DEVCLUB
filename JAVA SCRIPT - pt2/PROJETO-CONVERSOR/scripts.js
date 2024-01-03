//Sempre que eu quiser testar a conectividade do JS com meu HTML, uso o console.log() é uma boa prática pra ir testando se tudo está correndo bem no código

const convertButton = document.querySelector(".convert-button");
const currencySelectTo= document.querySelector(".currency-select-to");
const currencySelectFrom = document.querySelector(".currency-select-from")

//função para conversão dos valores de Real para Dólar
function convertValues() {

    //teste para saber se está tudo certo com os códigos
    //console.log("currencySelectFrom")

    //pegando o valor que é digitado dentro do input. Buscanso o valor lá dentro do HTML, buscando apenas o valor dentro dele.
    const inputCurrencyValue = document.querySelector(".input-currency").value; //Defini que não quero o input inteiro, mas apenas o valor de dentro dele

    const currencyValueToConvert = document.querySelector(
        ".currency-value-to-convert"
    ); //valor em real
    
    const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

    //variável do valor fictício do dólar e do euro
    const dolarToday = 5.2;
    const euroToday = 6.2;

    //condições para a conversão do valor digitado no input. Trocando o valor 0,00 pelo novo valor que foi digitado no input
    if (currencySelectTo.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelectTo.value == "euro") {
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

function changeCurrencyToFrom(){
    const currencyImgFrom = document.querySelector(".currency-img-from")

    //Condições converter de
    if (currencySelectFrom.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImgFrom.src = "./assets/img/dolar.png"
    }
}

function changeCurrencyTo(){
    const currencyName = document.getElementById("currency-name")
    const currencyImgTo = document.querySelector(".currency-img-to")

    // Condições converter para 
    if (currencySelectTo.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImgTo.src = "./assets/img/dolar.png"
    }
    
    if (currencySelectTo.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImgTo.src = "./assets/img/euro.png"
    }

    // Aqui chamamos novamente a função de converter, para que ao final das alterações de nome e imagem
    // dependendo da seleção que for feita, o usuário não precise clicar novamente no botão para converter
    // o valor, depois de inserir o valor a ser convertido e converter, o simples fato de trocar novamente
    // a moeda já trará o novo resultado.
    convertValues()
}



//ação do seletor de moeda, será "chamada" essa função toda vez que houver uma seleção de moeda no select
currencySelectTo.addEventListener("change", changeCurrencyTo)

//ação do botão de conversão, será "chamada" essa função toda vez que houver um clique do mouse no botão
convertButton.addEventListener("click", convertValues);
