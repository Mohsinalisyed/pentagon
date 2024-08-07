import { createContext, useState } from "react";

export const Context = createContext<any>(null);

export const MintContextProvider = ({ children }: any) => {
  const [mintValue, setMintValue] = useState(false);

  return (
    <Context.Provider value={{ mintValue, setMintValue }}>
      {children}
    </Context.Provider>
  );
};
