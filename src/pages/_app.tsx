import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import styled from "@emotion/styled";
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Header from "../components/header";
import Announcement from "../components/announcement";
import CartButton from "../components/cart/cart-button";
import { deviceIsBrowser } from "../lib/helpers";
import { default as NextImage } from "next/image";
import { pageTransitionSpeed } from "../lib/animate";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, SetLoading] = useState(false);

  if (deviceIsBrowser) {
    console.log(`Greetings, Traveller 🦧🌠`);
    console.log(`🐡 https://www.nakedlunch.studio/about 🐡`);
  }

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
        <CartButton />
        <Announcement />
        <PageTransitionWrapper loading={loading}>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </LazyMotion>
    </>
  );
}

export default MyApp;

type Props = {
  children: React.ReactNode;
  loading: boolean;
};

const PageTransitionWrapper = ({ children, loading }: Props) => {
  const router = useRouter();

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {loading && (
        <ImageWrapper
          initial={{
            opacity: 0,
            x: "-200%",
            y: "-50%",
          }}
          animate={{
            opacity: 1,
            x: "-50%",
            y: "-50%",
            transition: {
              opacity: { duration: pageTransitionSpeed / 1000 },
            },
          }}
          exit={{
            opacity: 0,
            x: "200%",
            y: "-50%",
            transition: {
              opacity: { duration: 0.2 },
            },
          }}
        >
          <NextImage
            src="/images/otter-cheeks.jpeg"
            alt="Something"
            layout="fill"
            objectFit="cover"
          />
        </ImageWrapper>
      )}
      {!loading && (
        <StyledMotionDiv
          key={router.pathname}
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
        >
          {children}
        </StyledMotionDiv>
      )}
    </AnimatePresence>
  );
};

const StyledMotionDiv = styled(m.div)`
  height: 100%;
  width: 100%;
`;
const ImageWrapper = styled(m.div)`
  height: 300px;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: IAmDeeCaptunNow 1s infinite;

  @keyframes IAmDeeCaptunNow {
    0% {
      filter: invert(0);
    }
    50% {
      filter: invert(1);
    }
    100% {
      filter: invert(0);
    }
  }
`;
