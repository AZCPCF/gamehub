import React, { FC, FunctionComponent } from "react";

type Test = {
  message: string;
};
const Test1 = ({ message }: Test) => {
  return <p>{message}</p>;
};
const Test2 = ({ message }: Test): React.JSX.Element => {
  return <p>{message}</p>;
};
const Test3 = ({ message }: { message: string }) => {
  return <p>{message}</p>;
};

const Test4: FunctionComponent<{ message: string }> = ({ message }) => {
  return <p>{message}</p>;
};

/* */

const Test5: FC<Test> = ({ message }) => {
  return <p>{message}</p>;
};

/* */
