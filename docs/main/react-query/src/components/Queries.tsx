import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const Queries: FC = () => {
  const {
    data: posts,
    isPending,
    isError,
    error,
    // status
  } = useQuery({
    queryKey: ["posts"],
    // placeholderData:[{title:'test'}],
    // initialData:[{title:'hello world'}],
    // staleTime:2000,
    // refetchOnWindowFocus:true,
    // refetchOnMount:'always'|true,
    // refetchInterval:4000,
    // retry:4,
    // retryDelay:3000,
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        return await res.json();
      }
      throw new Error("error in fetching data");
    },
  });
  if (isError) {
    return error?.message;
  }
  if (isPending) {
    return "pending...";
  }
  
//   if (status=='pending') {
//     return 'pending...'
//   }
//   if (status=='error') {
//     return error?.message
//   }
  return (
    <>
      {posts?.map((post: { title: string }, index: number) => (
        <p key={index}>{post.title}</p>
      ))}
    </>
  );
};
export default Queries;
