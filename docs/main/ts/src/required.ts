type User = {
  id?: number;
  name?: string;
  email?: string;
};

const user: Required<User> = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
console.log(user)