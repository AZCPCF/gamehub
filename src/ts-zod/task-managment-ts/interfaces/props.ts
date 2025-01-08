import { Task } from ".";

export interface TaskFormProps {
  onAddTask: (task: Task) => void;
}
export interface TaskItemProps {
  task: Task;
  onCompleteTask: (id: string) => void;
  taskId: number;
}
