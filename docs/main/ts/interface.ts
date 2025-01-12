
// interface

interface User {
  name: string;
  age: number;
}
// function
function print({ name, age }: User): string {
  return `${name}_${age}`;
}
// arrow function
const print1: ({ name, age }: User) => string = ({ name, age }) => {
  return `${name}_${age}`;
};
