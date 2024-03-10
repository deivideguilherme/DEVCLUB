/*
THIS

This em inglês significa -> este, esta, isto..

No JavaScript, o this faz referência: 
    Node -> module.exports
    Web  -> window

    Escopo:
        Global -> Quando começamos a escrever nossa aplicação
            No contexto global, o this faz referência ao objeto global, que é o objeto "window" no navegador de internet, ou ao objeto global no Node.js (modules.export).
            
        Local  -> Por exemplo, dentro de uma função
*/


//Escopo Local
const person = {
    name: "Deivide",
    age: 32,
    talk: function(){
        console.log(this.name)
    }
}

person.talk()



//Escopo Global
function myFuncition() {
    this.console.log('Escopo Global')
}

myFuncition()