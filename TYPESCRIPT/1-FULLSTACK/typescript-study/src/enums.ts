//JAVASCRIPT
const GENDER = {
  male: 'male',
  female: 'female',
  other: 'other'
}

//TYPESCRIPT
enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

type Person = {
  name: string;
  age: number;
  gender: string;
}

const person: Person = {
  name: 'Joao da Silva',
  age: 13,
  gender: Gender.MALE
}

function displayPersonInfo(person: Person): void {
  console.log(`${person.name}`);
  console.log(`${person.age}`);
  console.log(`${person.gender}`);
}

displayPersonInfo(person)