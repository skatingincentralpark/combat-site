import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
