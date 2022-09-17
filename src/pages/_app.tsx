import { useEffect, useState } from "react";
import Router from "next/router";
import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";

import Header from "@components/header/header";
import Announcement from "@components/announcement";
import PageTransitionWrapper from "@components/page-transition-wrapper";

import { deviceIsBrowser } from "@lib/helpers";
import { pageTransitionSpeed } from "@lib/animate";

if (deviceIsBrowser) {
  console.log(`Greetings, Traveller 🦧`);
  console.log(`https://www.nakedlunch.studio/about`);
}

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

      SetLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => SetLoading(false), pageTransitionSpeed);
    });

    Router.events.on("routeChangeError", () => {
      SetLoading(false);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <LazyMotion features={domAnimation}>
        <Header />
        <Announcement />
        <PageTransitionWrapper loading={loading}>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </LazyMotion>
    </>
  );
}

export default MyApp;
