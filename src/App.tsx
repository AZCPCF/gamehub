import { FC } from "react";
// import TaskManagmentTs from "./ts-zod/task-managment-ts";
import UserManagmentTs from "./ts-zod/user-management-ts";

const App: FC = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center`}
    >
      {/* <TaskManagmentTs /> */}
      <UserManagmentTs/>
    </div>
  );
};
export default App;
