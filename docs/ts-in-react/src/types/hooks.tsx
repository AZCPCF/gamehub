import { FC, useEffect, useRef, useState } from "react";
interface User {
  username?: string;
  age?: number;
}
const State: FC = () => {
  const [state, setState] = useState(false); // type : boolean

  const [user, setUser] = useState<User | null>(null); // type : User | null
  const changeUser = (user: User) => {
    setUser(user); // possible to switch state type
  };

  return <></>;
};

const Ref: FC = () => {
  const firstRef = useRef<HTMLDivElement>(null); // type : HTMLDivElement
  useEffect(() => {
    if (!firstRef.current) {
      throw Error("ref is empty");
    }
  });
  
  const secondRef = useRef<HTMLDivElement>(null!); // never be null ref

  return <></>;
};
