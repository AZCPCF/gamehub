import { FC } from "react";
import { User } from "../interfaces/user";
import UserItem from "./UserItem";
interface UserListProps {
  users: User[];
  onRemove:(id:string) => void;
}
const UserList: FC<UserListProps> = ({ users,onRemove }) => {
  return (
    <div className="py-6">
      {users?.map((user) => (
        <UserItem onRemove={onRemove} user={user} key={user.id} />
      ))}
    </div>
  );
};
export default UserList
