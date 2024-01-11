//Sempre que eu quiser testar a conectividade do JS com meu HTML, uso o console.log() é uma boa prática pra ir testando se tudo está correndo bem no código

const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select-from"); //DE
const currencySelectTo = document.querySelector(".currency-select-to"); //PARA

//função para conversão dos valores de Real para Dólar
function convertValues() {

    //teste para saber se está tudo certo com os códigos
    console.log(currencySelectFrom.value);
    console.log(currencySelectTo.value);

    //pegando o valor que é digitado dentro do input. Buscanso o valor lá dentro do HTML, buscando apenas o valor dentro dele.
    const inputCurrencyValue = document.querySelector(".input-currency").value; //Defini que não quero o input inteiro, mas apenas o valor de dentro dele
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real 
    const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas

    //variável do valor fictício do dólar e do euro
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 6.23;
    const bitcoinToday = 211276.79;   

    //condições para a conversão do valor digitado no input. Trocando o valor 0,00 pelo novo valor que foi digitado no input
    if (currencySelectTo.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelectTo.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelectTo.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BGP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectTo.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    /*alterando o valor do <p class="currency-value-to-convert"> para o valor que será salvo na variável inputCurrencyValue, 
      já formatando para a moeda do Brasil*/
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(currencyValueToConvert);


}






//Funções para alterar as respectivas bandeiras das moedas quando forem selecionadas
function changeCurrencyFrom(){
    const currencyNameFrom = document.querySelector(".currency-name-from")
    const currencyImgFrom = document.querySelector(".currency-img-from")

    //Condições converter de
    if (currencySelectFrom.value == "from-dolar"){
        currencyNameFrom.innerHTML = "Dólar Americano"
        currencyImgFrom.src = "./assets/img/dolar.png"
    }

    if (currencySelectFrom.value == "from-euro"){
        currencyNameFrom.innerHTML = "Euro"
        currencyImgFrom.src = "./assets/img/euro.png"
    }

    if (currencySelectFrom.value == "from-libra"){
        currencyNameFrom.innerHTML = "Libra Esterlina"
        currencyImgFrom.src = "./assets/img/libra.png"
    }

    if (currencySelectFrom.value == "from-bitcoin"){
        currencyNameFrom.innerHTML = "Bitcoin"
        currencyImgFrom.src = "./assets/img/bitcoin.png"
    }

    if (currencySelectFrom.value == "from-real"){
        currencyNameFrom.innerHTML = "Real Brasileiro"
        currencyImgFrom.src = "./assets/img/real.png"
    }
}


function changeCurrencyTo(){
    const currencyNameTo = document.getElementById("currency-name-to")
    const currencyImgTo = document.querySelector(".currency-img-to")

    // Condições converter para 
    if (currencySelectTo.value == "dolar"){
        currencyNameTo.innerHTML = "Dólar Americano"
        currencyImgTo.src = "./assets/img/dolar.png"
    }
    
    if (currencySelectTo.value == "euro"){
        currencyNameTo.innerHTML = "Euro"
        currencyImgTo.src = "./assets/img/euro.png"
    }

    if (currencySelectTo.value == "libra"){
        currencyNameTo.innerHTML = "Libra Esterlina"
        currencyImgTo.src = "./assets/img/libra.png"
    }

    if (currencySelectTo.value == "bitcoin"){
        currencyNameTo.innerHTML = "Bitcoin"
        currencyImgTo.src = "./assets/img/bitcoin.png"
    }

    if (currencySelectTo.value == "real"){
        currencyNameTo.innerHTML = "Real Brasileiro"
        currencyImgTo.src = "./assets/img/real.png"
    }

    // Aqui chamamos novamente a função de converter, para que ao final das alterações de nome e imagem
    // dependendo da seleção que for feita, o usuário não precise clicar novamente no botão para converter
    // o valor, depois de inserir o valor a ser convertido e converter, o simples fato de trocar novamente
    // a moeda já trará o novo resultado.
    convertValues()
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom)

//ação do seletor de moeda, será "chamada" essa função toda vez que houver uma seleção de moeda no select
currencySelectTo.addEventListener("change", changeCurrencyTo)

//ação do botão de conversão, será "chamada" essa função toda vez que houver um clique do mouse no botão
convertButton.addEventListener("click", convertValues);
