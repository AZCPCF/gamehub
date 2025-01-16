type User = {
  id: number;
  name: string;
  email: string;
};

const updateUser: Partial<User> = {
  name: "John Doe",
};
console.log(updateUser)
