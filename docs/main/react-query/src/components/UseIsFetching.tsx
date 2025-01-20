import { useIsFetching } from "@tanstack/react-query";
import { FC } from "react";

const UseIsFetching: FC = () => {
  const isFetching = useIsFetching();
  return (
    <p style={{ display: isFetching ? "block" : "none" }}>
      queries in fetching...
    </p>
  );
};
export default UseIsFetching;
