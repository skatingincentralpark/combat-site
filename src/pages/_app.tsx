import type { AppProps } from "next/app";
import PageTransitionWrapper from "../components/page-transition-wrapper";
import GlobalStyles from "../styles/global";
import Header from "../components/header";
import Announcement from "../components/announcement";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Announcement />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    </>
  );
}

export default MyApp;
