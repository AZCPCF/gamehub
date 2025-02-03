import { queryOptions, useQuery } from "@tanstack/react-query";
import { FC } from "react";

const QueryOptions: FC = () => {
  const todosOption = (id: number) =>
    queryOptions({
      queryKey: ["todos", id],
      // placeholderData:{title:'test'},
      initialData: { title: "test", completed: true },
      queryFn: async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        if (res.ok) {
          return await res.json();
        }
      },
    });
  const { data: todos, status, error } = useQuery(todosOption(4));

  // if (status == "pending") {
  //   return "pending...";
  // }
  if (status == "error") {
    return error?.message;
  }
  console.log(todos);
  return (
    <>
      <h1>todos</h1>
      <p>
        {todos.title} <span> - {!todos.completed && "un"}completed</span>
      </p>
    </>
  );
};
export default QueryOptions;
