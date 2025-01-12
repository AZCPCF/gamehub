import { FC, useState } from "react";
import TaskForm from "./components/TaskForm";
import { Task } from "./interfaces";
import TaskItem from "./components/TaskItem";

const TaskManagmentTs: FC = () => {
  const completeTask = (id: string) =>
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  const [tasks, setTasks] = useState<Task[]>([]);
  const onAddTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="flex ">
      <TaskForm onAddTask={onAddTask} />
      <div className="p-3 mx-5 overflow-scroll">
        {tasks?.map((task, index) => (
          <TaskItem task={task} taskId={index+1} key={index} onCompleteTask={completeTask} />
        ))}
      </div>
    </div>
  );
};
export default TaskManagmentTs;
