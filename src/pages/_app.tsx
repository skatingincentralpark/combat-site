import type { AppProps } from "next/app";
import PageTransitionWrapper from "../components/page-transition-wrapper";
import GlobalStyles from "../styles/global";
import Header from "../components/header";
import Announcement from "../components/announcement";
import Cart from "../components/cart/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Cart />
      <Announcement />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    </>
  );
}

export default MyApp;
