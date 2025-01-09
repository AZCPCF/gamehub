import { ChangeEvent, FC, Fragment, useState } from "react";
import { Role, User } from "../interfaces/user";
interface UserFormProps {
  onSubmit: (formData: User) => void;
}
const fields: {
  name: keyof User;
  type: "text" | "email" | "number" | "password";
}[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "age", type: "number" },
  { name: "password", type: "password" },
];
const UserForm: FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<User>({
    age: 0,
    email: "",
    id: "",
    name: "",
    password: "",
    role: "Guest",
  });
  const validateFields = (): boolean => {
    return Object.entries(formData).every(([key, value]) => {
      if (key === "age") {
        return value >= 15;
      }
      return Boolean(value);
    });
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData((prev) => {
      if (id == "age") {
        return {
          ...prev,
          [id]: +value,
        };
      }
      if (id == "role") {
        return {
          ...prev,
          [id]: value as Role,
        };
      }
      return {
        ...prev,
        [id]: value,
      };
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validateFields()) {
          return;
        }
        onSubmit(formData);
      }}
      className="w-[500px] flex flex-col bg-blue-600 p-4 rounded-md shadow-2xl h-[575px] my-3"
    >
      <h1 className="text-2xl text-center text-black">Add User</h1>
      {fields?.map((item, index) => (
        <Fragment key={index}>
          <label className="px-2" htmlFor={item.name}>
            {item.name}
          </label>
          <input
            // value={title}
            id={item.name}
            type={item.type}
            className="p-2 m-3 rounded-md"
            onChange={handleChange}
            min={item.name == "age" ? 15 : 0}
            value={formData[item.name as keyof User]}
            placeholder={item.name}
          />
        </Fragment>
      ))}
      <label htmlFor="role" className="px-2">
        role
      </label>
      <select
        id="role"
        value={formData.role}
        className="p-2 m-3 rounded-md"
        onChange={handleChange}
      >
        <option value={"Admin"}>Admin</option>
        <option value={"User"}>User</option>
        <option value={"Guest"}>Guest</option>
      </select>
      <input
        type="submit"
        value={"Submit"}
        className={`bg-[#2b2a33] p-2 m-3 rounded-md border-2 border-[#2b2a33] hover:bg-inherit`}
      />
    </form>
  );
};
export default UserForm;
