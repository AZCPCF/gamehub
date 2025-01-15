import { FC, MouseEventHandler } from "react";
import { MessagesSchema } from "../validations/messagesSchema";
interface onDelete {
  onDelete: (id:string) => void;
}
const Card: FC<MessagesSchema & onDelete> = ({
  id,
  message,
  username,
  onDelete,
}) => {
  console.log(id, message, username);
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation();
    onDelete(id)
  };
  return (
    <div
      className="w-4/12 h-[150px] p-1"
      onClick={() => {
        console.log("tesst");
      }}
    >
      <div className=" bg-[#1a1a1a] h-full w-full rounded-md border-2 border-transparent hover:border-[#646cff]  transition-colors duration-500 flex justify-evenly p-4">
        <div className="*:m-0">
          <p># {id}</p>
          <p className="text-3xl">{message}</p>
          <p className="text-gray-500">by {username}</p>
        </div>
        <button
          className="h-2/12  hover:border-red-600 transition-colors"
          onClick={handleClick}
        >
          delete
        </button>
      </div>
    </div>
  );
};
export default Card;
