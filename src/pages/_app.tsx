import dynamic from "next/dynamic";
import { LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";

import Header from "@components/header/header";
import PageTransitionWrapper from "@components/page-transition-wrapper";

import { deviceIsBrowser } from "@lib/helpers";
import useIsLoading from "hooks/useIsLoading";

import { Jost } from "next/font/google";
import { HeaderContextProvider } from "@lib/header-context";

const CartContextProvider = dynamic(() =>
  import(
    /* webpackChunkName: "Cart_Context_Provider" */ "@lib/cart-context"
  ).then((mod) => mod.CartContextProvider)
);

// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () =>
  import("@lib/framer-features").then((res) => res.default);

const jost = Jost({ subsets: ["latin"] });

if (deviceIsBrowser) {
  console.log(
    `%c
                                                                 
  .     |___________________________________                     
  |-----|- - -|''''|''''|''''|''''|''''|'##\|__                   
  |- -  |  cc 6    5    4    3    2    1 ### __]==---------------
  |-----|________________________________##/|                    
  'jgs  |"""""""""""""""""""""""""""""""""""                     
                                                                 

More here: https://www.nakedlunch.studio/about

ASCII by Joan G. Stark`,

    "background: #f7ff04; color: #bada55"
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useIsLoading();

  return (
    <HeaderContextProvider>
      <CartContextProvider>
        <GlobalStyles />
        <LazyMotion features={loadFeatures} strict>
          <Header isLoading={isLoading} />
          <PageTransitionWrapper loading={isLoading} className={jost.className}>
            <Component {...pageProps} />
          </PageTransitionWrapper>
        </LazyMotion>
      </CartContextProvider>
    </HeaderContextProvider>
  );
}

export default MyApp;
