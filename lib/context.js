import { useState } from "react";
import { createContext, useContext } from "react";

// Set our initial context states
const initialContext = {
  isPageTransition: false,
};

// Set context
const SiteContext = createContext({
  context: initialContext,
  setContext: () => null,
});

/*  ------------------------------ */
/*  Our Context Wrapper
/*  ------------------------------ */

const SiteContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    ...initialContext,
  });

  return (
    <SiteContext.Provider
      value={{
        context,
        setContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

// Access our global store states
function useSiteContext() {
  const { context } = useContext(SiteContext);

  return context;
}

// Toggle page transition state
function useTogglePageTransition() {
  const { setContext } = useContext(SiteContext);

  async function togglePageTransition(state) {
    setContext((prevState) => {
      return { ...prevState, isPageTransition: state };
    });
  }
  return togglePageTransition;
}

export { useSiteContext, useTogglePageTransition, SiteContextProvider };
