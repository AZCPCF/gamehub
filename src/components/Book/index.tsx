import { useState } from "react";
import { useBook } from "../../hooks/react-queries";

const Book = () => {
  const [bookId, setBookId] = useState("pD6arNyKyi8C");
  const { data: book, isPending } = useBook(bookId);
  if (isPending) {
    return "Pending...";
  }
  return (
    <>
      <div className="w-[500px] flex justify-center items-center flex-col shadow-xl border-2 border-[#313131] rounded-lg p-3">
        <h1 className="p-2 m-3">
          {book?.title} {"( "}
          {book?.averageRating}/5{" )"}
        </h1>
        <img src={book?.thumbnail} className="w-[200px] h-[300px]" />
        <h2 className="p-2 m-3">{book?.authors?.[0]}</h2>
      </div>
    </>
  );
};
export default Book;
