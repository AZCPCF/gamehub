import { FC } from "react";
import TaskManagmentTs from "./ts-zod/task-managment-ts";

const App: FC = () => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center`}
    >
      <TaskManagmentTs />
    </div>
  );
};
export default App;
