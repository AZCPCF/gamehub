import React, { CSSProperties, FormEventHandler, ReactNode } from "react";

export interface AppProps {
  children?: ReactNode;
  childrenElement: React.JSX.Element;
  style?: CSSProperties;
  onChange?: FormEventHandler<HTMLInputElement>;
}
