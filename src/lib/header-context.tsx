import React, { createContext, useState } from "react";

interface DefaultState {
  isTransparent: boolean;
  setIsTransparent: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState: DefaultState = {
  isTransparent: true,
  setIsTransparent: () => {},
};

/** Used to toggle the transparency of the header from different components */
const HeaderContext = createContext(defaultState);

export default HeaderContext; // what's used to actually consume the context

const HeaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTransparent, setIsTransparent] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        isTransparent,
        setIsTransparent,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContextProvider };
