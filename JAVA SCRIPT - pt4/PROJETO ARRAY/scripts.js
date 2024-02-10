const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttomSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


//Função para que converterá os valores das moedas para o real brasileiro
function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-BR', {
            style: 'currency', 
            currency: 'BRL',
        })

        return newValue
}


//FOR EACH
function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi + `
    
                        <li>
                            <img src= ${product.src}>
                            <p>${product.name}</p>
                            <p class="item-price">${formatCurrency(product.price)}</p>
                        </li>
                    `
    })

    //inserindo as informações geradas pela função acima, dentro do HTML
    list.innerHTML = myLi
}


//MAP

/*Indo lá no arquivo products.js e trazendo as informações do array
e modificando apenas os preços com 10% de desconto*/
function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        //Spread Operator - Ele trás todos os itens da forma original
        ...product,
        price: product.price * 0.9, //10% de desconto
    }))

    showAll(newPrices)
}


//REDUCE

/*acc = acumulador       curr = atual ou valor atual*/
function sumAllItens() {
    //acumulador + valor atual e valor que o acumulador começa, no caso zero.
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
                        <li>
                            <p>O valor total dos itens é: ${formatCurrency(totalValue)}</p>
                        </li>
                    `

    console.log(totalValue);
}


//FILTER
function filterAllItens () {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

/* Toda vez que eu precisar passar um dado dentro do addEventListener
preciso inserir uma função anônima () => */
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttomSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', filterAllItens)