import { FC, useEffect, useState } from "react";
import { MessagesSchema } from "../validations/messagesSchema";
import Card from "../components/Card";

const Messages: FC = () => {
  const [messages, setMessages] = useState<MessagesSchema[]>([]);
  const getMessages = async () => {
    const req = await fetch("http://localhost:3000/messages");
    if (req.ok) {
      const res: MessagesSchema[] = await req.json();
      setMessages(res);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);
  const onDelete = async (id: string) => {
    const req = await fetch(`http://localhost:3000/messages/${id}`, {
      method: "DELETE",
    });
    if (req.ok) {
      alert("deleted");
    }
    getMessages()
  };
  return (
    <div className="flex w-full flex-wrap">
      {messages?.map((item, index) => (
        <Card onDelete={onDelete} key={index} {...item} />
      ))}
    </div>
  );
};
export default Messages;
