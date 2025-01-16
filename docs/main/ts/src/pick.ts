// Original type
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type BasicInfo = Pick<User, "name" | "email">;

const userInfo: BasicInfo = {
  name: "John Doe",
  email: "john@example.com",
};

console.log(userInfo)