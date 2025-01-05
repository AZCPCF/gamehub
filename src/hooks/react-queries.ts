import { useQuery } from "@tanstack/react-query";
import { getBookById, getBooks } from "../utils";

export const useBook = (id: string) => {
  return useQuery({
    queryKey: ["book", { id }],
    queryFn: () => getBookById(id),
  });
};
export const useBooks = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });
};
