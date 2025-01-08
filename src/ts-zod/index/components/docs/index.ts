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
// generics

function identity<Type>(arg: Type): Type {
  return arg;
}

// 2

function identity1<Type>(arg: Type): Type {
  return arg;
}
let myIdentity1: GenericIdentityFn<string> = identity;

// 3

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity2<Type>(arg: Type): Type {
  return arg;
}
let myIdentity2: GenericIdentityFn<number> = identity;
