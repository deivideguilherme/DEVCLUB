/*
    If (Se)
    Else (Se não)
    Else If (Se não, se)
*/

const temperature = 42

if (temperature === 36){
    console.log('Você está saudável')
} else if (temperature > 36 && temperature <= 40){
    console.log('Você está com febre')
} else if(temperature > 40){
    console.log('Você está com muita febre')
} 
else {
    console.log('Você está com hipotermia')
}