import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";

import Header from "@components/header/header";
import Announcement from "@components/announcement";
import PageTransitionWrapper from "@components/page-transition-wrapper";
import MusicPlayer from "@components/music-player";

import { deviceIsBrowser } from "@lib/helpers";
import useIsLoading from "hooks/useIsLoading";

if (deviceIsBrowser) {
  console.log(`Greetings, Traveller 🦧`);
  console.log(`https://www.nakedlunch.studio/about`);
}

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useIsLoading();

  return (
    <>
      <GlobalStyles />
      <LazyMotion features={domAnimation}>
        <Header isLoading={isLoading} />
        <MusicPlayer />
        <Announcement />
        <PageTransitionWrapper loading={isLoading}>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </LazyMotion>
    </>
  );
}

export default MyApp;
