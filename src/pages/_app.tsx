import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";

import Header from "@components/header/header";
import PageTransitionWrapper from "@components/page-transition-wrapper";
import MusicPlayer from "@components/music-player";

import { deviceIsBrowser } from "@lib/helpers";
import useIsLoading from "hooks/useIsLoading";

import { Jost } from "@next/font/google";

const jost = Jost({ subsets: ["latin"] });

if (deviceIsBrowser) {
  console.log(
    `%c
                                                                          
  .     |___________________________________                              
  |-----|- - -|''''|''''|''''|''''|''''|'##\|__                            
  |- -  |  cc 6    5    4    3    2    1 ### __]==----------------------  
  |-----|________________________________##/|                             
  'jgs  |"""""""""""""""""""""""""""""""""""                              
                                                                          

Developer looking for something new and exciting?  I wish you the best of luck 😂

More here: https://www.nakedlunch.studio/about

ASCII by Joan G. Stark`,

    "background: #f7ff04; color: #bada55"
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useIsLoading();

  return (
    <>
      {/* <GlobalStyles /> */}
      <LazyMotion features={domAnimation} strict>
        <Header isLoading={isLoading} />
        {/* <style jsx global>{`
          html {
            font-family: ${jost.style.fontFamily};
          }
        `}</style> */}
        {/* <MusicPlayer /> */}
        {/* <PageTransitionWrapper loading={isLoading}> */}
        <Component {...pageProps} />
        {/* </PageTransitionWrapper> */}
      </LazyMotion>
    </>
  );
}

export default MyApp;
