import { FC } from "react";
import { TaskItemProps } from "../interfaces/props";
const TaskItem: FC<TaskItemProps> = ({
  task: { description, dueDate, id, priority, isCompleted, title },
  onCompleteTask,
  taskId,
}) => {
  return (
    <div className="border-2 border-blue-600 p-2 m-3 rounded-lg shadow-xl">
      <p>task {taskId}</p>
      <p>title : {title}</p>
      <p>description : {description}</p>
      <p>
        dueDate :{" "}
        {Boolean(dueDate.getTime()) ? dueDate.getTime() : "wrong date"}
      </p>
      <p>priority : {priority}</p>
      <p className={`${!isCompleted ? "text-red-600" : "text-green-600"}`}>
        {isCompleted ? "completed" : "uncompleted"}
      </p>
      <button
        className={`my-3 ${
          isCompleted && "text-gray-600 hover:border-[#1a1a1a]"
        }`}
        disabled={isCompleted}
        onClick={() => {
          onCompleteTask(id);
        }}
      >
        {isCompleted ? "done !" : "complete"}
      </button>
    </div>
  );
};

export default TaskItem;
