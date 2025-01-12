import { FC, FormEvent, useState } from "react";
import { Task } from "../interfaces";
import { TaskFormProps } from "../interfaces/props";
import { Priority } from "../types";

const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: new Date(dueDate),
      isCompleted: false,
      priority,
    };
    onAddTask(newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Medium");
  };
  console.log(!Boolean(title));
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] flex flex-col bg-blue-600 p-4 rounded-md shadow-2xl h-[500px] my-6"
    >
      <h1 className="text-3xl text-center text-black">Add Task</h1>
      <label className="px-2" htmlFor="title">
        title
      </label>
      <input
        value={title}
        id="title"
        className="p-2 m-3 rounded-md"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <label className="px-2" htmlFor="description">
        description
      </label>
      <input
        value={description}
        id="description"
        className="p-2 m-3 rounded-md"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <label className="px-2" htmlFor="dueDate">
        dueDate
      </label>
      <input
        value={dueDate}
        className="p-2 m-3 rounded-md"
        id="dueDate"
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="dueDate"
      />
      <label className="px-2" htmlFor="priority">
        priority
      </label>
      <select
        id="priority"
        value={priority}
        className="p-2 m-3 rounded-md"
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value={"Low"}>Low</option>
        <option value={"Medium"}>Medium</option>
        <option value={"High"}>High</option>
      </select>
      <input
        type="submit"
        disabled={!Boolean(title && description && dueDate)}
        value={"Submit"}
        className={`bg-[#2b2a33] p-2 m-3 rounded-md border-2 border-[#2b2a33] text-gray-500 ${
          Boolean(title && description && dueDate) &&
          "hover:bg-inherit text-inherit"
        }`}
      />
    </form>
  );
};
export default TaskForm;
