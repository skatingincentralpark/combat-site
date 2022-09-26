import { default as NextImage } from "next/image";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import { pageTransitionSpeed } from "@lib/animate";

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
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {/* {loading && (
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
      )} */}
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

export default PageTransitionWrapper;

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
