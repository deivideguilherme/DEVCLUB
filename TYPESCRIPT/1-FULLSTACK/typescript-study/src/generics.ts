//<T> -> tipo genérico

function getFirstElement<T>(data: T[]): T | null {
  // ! -> se eu não tiver nada dentro do data.. 
  if (!data.length) {
    return null
  }

  const [firstElement] = data;

  return firstElement;
}

const stringArray: string[] = ['Deivide', 'Carla', 'Helenna'];
const numberArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))