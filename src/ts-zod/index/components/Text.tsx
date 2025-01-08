type user = {
  name: "mmd" | string;
  age?: 12;
};
interface User {
  name: string;
  age?: number;
}
const obj: User = {
  name: "test",
  age: 1345,
};
const print :({name,age}:User) => string = ({name,age}) => {
    return `${name}_${age}`
}
let o = { x: "hi", extra: 1 }; // ok
let o2: { x: string } = o; // ok

export default function Text() {
  return <div>{print(obj)}</div>;
}
