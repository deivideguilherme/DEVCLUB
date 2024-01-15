/*
    SWITCH CASE --> Controlador de Fluxo

    Diferente do que acontece com o if/else onde posso definir condições, n
    no Switch case os valores tem que ser exatos! Não há condições.
*/

const temperature = 30

switch (temperature) {
    case 10:
        console.log('Frio')
        break;

    case 20:
        console.log('Ameno')
        break;

    case 30:
        console.log('Quente')
        break;

    default:
        console.log('Indefinido')
        break;
}