import { useBooks } from "../../hooks/react-queries";

const Books = () => {
  const { data: books, isPending } = useBooks();
  if (isPending) {
    return "Pending...";
  }
  return (
    <>
      {books?.books?.map(
        (
          book: {
            title: string;
            thumbnail: string;
            averageRating: string;
            authors: Array<string>;
            id:string;
          },
          index: number
        ) => (
          <div
            className="lg:w-4/12  md:w-6/12 sm:w-full flex justify-center items-center flex-col shadow-xl border-2 border-[#313131] rounded-lg my-2"
            key={index}
          >
            <h1 className="p-2 m-3">
              {book?.title} 
              {book?.averageRating &&
              <>
              {"( "}
              {book?.averageRating} / 5{" )"}
              </>
              }
            </h1>
            <img src={book?.thumbnail} className="w-[200px] h-[300px]" />
            <h2 className="p-2 m-3">{book?.authors?.map((item,index) => `${item} ${Boolean(book?.authors[index+1]) ?',' :''}`)}</h2>
            <h2 className="p-2 m-3">{book?.id}</h2>
          </div>
        )
      )}
    </>
  );
};
export default Books;
