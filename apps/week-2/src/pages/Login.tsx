import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../validations/loginSchema";
import Control from "../components/Control";
import { LoginProps } from "../interfaces/LoginProps";
import { AuthContext } from "../store/AuthContext";

const Login: FC<LoginProps> = ({ title = "login" }) => {
  const { login } = useContext(AuthContext);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (data: LoginSchema) => {
    const req = await fetch("http://localhost:3000/users");
    if (req.ok) {
      const res = await req.json();
      const findUser = res.filter(
        (item: LoginSchema) =>
          item.username == data.username && item.password == data.password
      );
      if (findUser.length > 0) {
        login();
        alert("login");
        console.log(findUser);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-11/12 lg:w-4/12 md:w-6/12 sm:w-8/12 justify-center items-center shadow-2xl border border-[#646cff] rounded-lg p-3"
    >
      <h2 className="text-3xl p-3">{title}</h2>
      <Control control={control} name="username" errors={errors} />
      <Control control={control} name="password" errors={errors} />
      <button
        className="w-full p-2 m-2 outline-none focus:border-[#646cff]"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};
export default Login;
