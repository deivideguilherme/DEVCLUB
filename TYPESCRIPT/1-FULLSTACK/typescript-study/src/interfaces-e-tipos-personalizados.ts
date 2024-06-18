/* --------< TYPE >--------*/

type Coordenate = {
  x: number;
  y: number;
};

function caculateDistance(pointA: Coordenate, pointB: Coordenate): number {
  const distanciax = pointB.x - pointA.x;
  const distanciay = pointB.y - pointA.y;

                      //distancia do x ao quadrado + distancia do y ao quadrado
  const result = Math.sqrt(distanciax * distanciax + distanciay * distanciay);

  return result;
}

const cordinateA: Coordenate = {
  x: 20,
  y: 8,
};

const cordinateB: Coordenate = {
  x: 15,
  y: 30,
};

// console.log(caculateDistance(cordinateA, cordinateB));


/* --------< INTERFACE >--------*/
/* Não possui apenas propriedades estáticas, também apresenta funções métodos; */

interface Car {
  brand: string;
  model: string;
  year: number;
  startEngine: () => void;
}

const myCar: Car = {
  brand: 'Audi',
  model: 'A3',
  year: 2023,
  startEngine: () => {
    console.log('Engine Started!')
  }
}

function drive (car: Car): void{
  console.log(`Driving ${car.brand}-${car.model}`);

  car.startEngine();
}

drive(myCar);