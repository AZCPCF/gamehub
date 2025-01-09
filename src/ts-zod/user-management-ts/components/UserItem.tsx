import { FC, Fragment } from "react";
import { User } from "../interfaces/user";
interface UserItemProps {
  user: Omit<User, "password">;
  onRemove: (id: string) => void;
}
const fields: {
  name: keyof User;
  type: "text" | "email" | "number" | "password";
}[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "age", type: "number" },
];
const UserItem: FC<UserItemProps> = ({ user, onRemove }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onRemove(user.id);
      }}
    >
      {fields?.map((field, index) => (
        <Fragment key={index}>
          <label className="px-2" htmlFor={field.name}>
            {field.name}
          </label>
          <input
            id={field.name}
            type={field.type}
            disabled={true}
            className="p-2 m-3 rounded-md"
            value={user[field.name as keyof Omit<User, "password" | "id">]}
          />
        </Fragment>
      ))}
      <label htmlFor="role" className="px-2">
        role
      </label>
      <select
        id="role"
        value={user.role}
        className="p-2 m-3 rounded-md"
        disabled
      >
        <option value={"Admin"}>Admin</option>
        <option value={"User"}>User</option>
        <option value={"Guest"}>Guest</option>
      </select>
      <input
        type="submit"
        value={"Remove"}
        className={`bg-[#2b2a33] text-red-700 p-2 m-3 rounded-md border-2 border-[#2b2a33] hover:bg-inherit`}
      />
    </form>
  );
};
export default UserItem;
