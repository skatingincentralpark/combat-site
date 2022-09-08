import { useEffect, useState } from "react";
import Router from "next/router";
import type { AppProps } from "next/app";
import PageTransitionWrapper from "../components/page-transition-wrapper";
import GlobalStyles from "../styles/global";
import Header from "../components/header";
import Announcement from "../components/announcement";
import CartButton from "../components/cart/cart-button";
import { deviceIsBrowser } from "../lib/helpers";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false);

  // Trigger our loading class
  useEffect(() => {
    if (deviceIsBrowser) {
      document.documentElement.classList.toggle("is-loading", loading);
    }
  }, [loading]);

  useEffect(() => {
    Router.events.on("routeChangeStart", (_, { shallow }) => {
      // Bail if we're just changing URL parameters
      if (shallow) return;

      // Otherwise, start loading
      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => SetLoading(false), 300);
    });

    Router.events.on("routeChangeError", () => {
      SetLoading(false);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <CartButton />
      <Announcement />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
    </>
  );
}

export default MyApp;
