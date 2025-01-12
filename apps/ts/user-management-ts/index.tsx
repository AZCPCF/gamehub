import { FC, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { User } from "./interfaces/user";
import { createUser } from "./utils/userHelpers";

const UserManagmentTs: FC = () => {
  const [users, setUsers] = useState<User[]>([
    createUser({
      name: "alisan",
      age: 17,
      email: "99.a.cpcf.r.99@gmail.com",
      password: "suprisesuprisemf",
      role: "Admin",
    }),
  ]);
  const onSubmit = (user: User) => {
    setUsers((prev) => [...prev, createUser(user)]);
  };
  const onRemove = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id));
  };

  return (
    <div>
      <UserForm onSubmit={onSubmit} />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
};
export default UserManagmentTs;
