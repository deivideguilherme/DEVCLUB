/*
OPERADORES LÓGICOS
    && --> E      Basta ter um falso pra ele ser falso
        true && true = true
        true && false = false
        false && false = false

    || --> Ou     Basta ter um verdadeiro pra ele ser verdadeiro
        true || true = true
        true || false = true
        false || false = false
        
    
    !  --> Negação
        !true = false
        !false = true

*/

// && --> E
console.log(true && true && true)      //true
console.log(true && false && true)     //false
console.log(false && false && false)   //false
console.log(false && true && false)    //false


// || --> Ou
console.log(true || true || true)      //true
console.log(true || false && true)     //true
console.log(false || false || false)   //false
console.log(false || true && false)    //true


// !true  |  !false --> Negação
console.log(!true)      //false
console.log(!false)     //true