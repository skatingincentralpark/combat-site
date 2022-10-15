import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";

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
    <AnimatePresence>
      {!loading && (
        <TransitionWrapper
          key={router.pathname}
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
        >
          {children}
        </TransitionWrapper>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;

const TransitionWrapper = styled(m.div)`
  height: 100%;
`;
