// type
type user = {
  name: string;
  age?: 12;
};
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
// variable
const test: user = { name: "test" /*age:12*/ };
const test2: User = { name: "test", age: 12 };
 
declare const staffer: user;
