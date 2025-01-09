// conditionalTypes
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
// SomeType extends OtherType ? TrueType : FalseType;
const dogg: Dog extends Animal ? string : number = "snoop";
console.log(dogg);

//

interface Id {
  id: number;
}
interface Name {
  name: string;
}
type IdOrName<T extends number | string> = T extends number ? Id : Name;

const user: IdOrName<number> = { id: 12 };
console.log(user);

function createUser<T extends number | string>(IdOrName: T): IdOrName<T> {
  throw "unimplemented";
}
console.log(createUser('test')) // Name
console.log(createUser(12)) // Id
