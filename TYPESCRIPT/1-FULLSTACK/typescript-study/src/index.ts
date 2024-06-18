function soma(a: number, b: number): number {
  return a + b;
}

const result = soma(1, 2)

console.log(result)



/*
    PARA TRANSPILAR (CONVERTER) O ARQUIVO TYPESCRIPT PARA JAVASCRIPT, UTILIZA-SE:
        --> 1° npx tsc --init
        --> 2° npx tsc
        --> 3° node src/index.js

    PARA APENAS EXECUTAR O ARQUIVO SEM A NECESSIDADE DA CONVERSÃO A PRIMEIRO MOMENTO, UTILIZA:SE:
        --> 1° yarn add tsx -D
        --> 2° yarn tsx src/index.ts

        LEMBRANDO QUE O TSX APENAS POSSIBILITA A INTERPRETAÇÃO DO NODE.JS PARA TESTES DURANTE O
        DESENVOLVIMENTO. FAZENDO NECESSÁRIO A TRANSPILAÇÃO (CONVERSÃO) AO FINAL DO PROJETO!!! 
*/