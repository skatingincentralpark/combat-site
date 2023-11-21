import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import useIsLoading from "hooks/useIsLoading";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageTransitionWrapper = ({ children, className }: Props) => {
  const router = useRouter();
  const isLoading = useIsLoading();

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
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence>
      {!isLoading && (
        <TransitionWrapper
          key={router.pathname}
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          className={className}
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
