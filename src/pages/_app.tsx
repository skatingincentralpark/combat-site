import type { AppProps } from "next/app";
import PageTransitionWrapper from "../components/page-transition-wrapper";
import GlobalStyles from "../styles/global";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    </>
  );
}

export default MyApp;
