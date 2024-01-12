//DECLARAÇÃO DE VARIÁVEIS QUE BUSCAM ELEMENTOS DO HTML
const convertButton = document.querySelector('.convert-button')
const selectFrom = document.querySelector('.select-from')
const selectTo = document.querySelector('.select-to')

//CONVERTENDO OS VALORES
function convertvalues(){
    //VÁRIÁVEIS PARA COTAÇÃO DAS MOEDAS EM TEMPO REAL - CONSUMINDO API DA AWESOMEAPI.COM.BR
const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL, GBP-BRL'

fetch (url + coins)
    .then(function(response){
        return response.json()
    })
    .then(function(exchangeMoney){ 
        const dolarToday = exchangeMoney.USDBRL;
        const euroToday = exchangeMoney.EURBRL;
        const bitcoinToday = exchangeMoney.BTCBRL;
    })

    const inputCurrencyValue = document.querySelector('.input-currency').value
    //FROM
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    //TO
    const currencyValueConverted = document.querySelector('.currency-value-converted')

    //COTAÇÃO DAS MOEDAS
    if (selectTo.value == 'to-dolar' && selectFrom == 'from-real'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD', 
        }).format(dolarToday)
    }

}

//CONVERTER DE
function changeSelectFrom(){
    // console.log('selectFrom');


}

//CONVERTER PARA
function changeSelectTo(){
    // console.log('selectTo');


}

//FORMATANDO AS MOEDAS 
function formatCurrency(){



}


//TROCANDO AS MOEDAS E SUAS RESPECTIVAS BANDEIRAS
function changeCurrency(){
    const currencyNameFrom = document.querySelector('.currency-name-from')
    const currencyImgFrom = document.querySelector('.currency-img-from')
    const currencyNameTo = document.querySelector('.currency-name-to')
    const currencyImgTo = document.querySelector('.currency-img-to')

    //DE
    if (selectFrom.value == 'from-real'){
        currencyNameFrom.innerHTML = 'Real Brasileiro'
        currencyImgFrom.src = './assets/img/real.png'
    }

    if (selectFrom.value == 'from-dolar'){
        currencyNameFrom.innerHTML = 'Dólar Americano'
        currencyImgFrom.src = './assets/img/dolar.png'
    }

    if (selectFrom.value == 'from-euro'){
        currencyNameFrom.innerHTML = 'Euro'
        currencyImgFrom.src = './assets/img/euro.png'
    }

    if (selectFrom.value == 'from-libra'){
        currencyNameFrom.innerHTML = 'Libra Esterlina'
        currencyImgFrom.src = './assets/img/libra.png'
    }

    if (selectFrom.value == 'from-bitcoin'){
        currencyNameFrom.innerHTML = 'Bitcoin'
        currencyImgFrom.src = './assets/img/bitcoin.png'
    }

    //PARA
    if (selectTo.value == 'to-dolar'){
        currencyNameTo.innerHTML = 'Dólar Americano'
        currencyImgTo.src = './assets/img/dolar.png'
    }

    if (selectTo.value == 'to-euro'){
        currencyNameTo.innerHTML = 'Euro'
        currencyImgTo.src = './assets/img/euro.png'
    }

    if (selectTo.value == 'to-libra'){
        currencyNameTo.innerHTML = 'Libra Esterlina'
        currencyImgTo.src = './assets/img/libra.png'
    }

    if (selectTo.value == 'to-bitcoin'){
        currencyNameTo.innerHTML = 'Bitcoin'
        currencyImgTo.src = './assets/img/bitcoin.png'
    }

    if (selectTo.value == 'to-real'){
        currencyNameTo.innerHTML = 'Real Brasileiro'
        currencyImgTo.src = './assets/img/real.png'
    }


    convertvalues();
}


//MONITORAMENTO DE AÇÕES DA PÁGINA
convertButton.addEventListener('click', convertvalues)
selectFrom.addEventListener('change', changeCurrency)
selectTo.addEventListener('change', changeCurrency)

