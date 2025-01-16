// Original type
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};
const defUser: User = {
  age: 12,
  email: "T",
  id: 10,
  name: "test",
};
console.log(defUser)

type UserWithoutSensitiveInfo = Omit<User, "email" | "age">;

const user: UserWithoutSensitiveInfo = {
  id: 1,
  name: "John Doe",
};

console.log(user);
