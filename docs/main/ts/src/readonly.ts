type User = {
  id: number;
  name: string;
};

const user: Readonly<User> = {
  id: 1,
  name: "John Doe",
};

console.log(user);
// user.name = "Jane Doe"; // error
console.log(user);
