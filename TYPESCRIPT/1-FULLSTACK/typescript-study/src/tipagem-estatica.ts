/*
 Tipos primitivos:
    number -> números inteiros, números decimais;
    string -> textos, caracteres;
    boolean -> true ou false;
 */

let age: number = 27;
let fullName: string = 'Deivide Guilherme';
let isAlive: boolean = true;

// Inferência de Tipos (Define o tipo através do valor declarado a váriável)
let animal = 'Cat'; //Tipo string
let quantity = 23;  //Tipo number

//Parâmetros e retornos de funções e metodos
function sum(a: number, b: number): number {
  const result = a + b;

  return result;
}

//console.log(sum(1, 3))

//Função com retorno opcional              ou
function greeting(fullName: string): string | void {
  if (fullName) {
    return `Hello, ${fullName}!`;
  }
}

//Função com parâmetros opcionais
function stringOrNumberSize(value: string | number): number {
  if (typeof value === 'string') {
    return value.length
  }
  return value;
}

console.log(stringOrNumberSize('Hello'));
console.log(6);