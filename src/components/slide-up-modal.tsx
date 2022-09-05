import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isClosed: boolean;
  children?: React.ReactNode;
  delay?: number;
  padding?: string;
  displaydesktop?: string;
};

const SlideUpModal = ({
  isClosed,
  children,
  delay,
  padding,
  displaydesktop,
}: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: delay ? delay : 0,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {!isClosed && (
        <SlideUpModalWrapper
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          padding={padding}
          displaydesktop={displaydesktop}
        >
          {children}
        </SlideUpModalWrapper>
      )}
    </AnimatePresence>
  );
};

type StyledProps = {
  padding?: string;
  displaydesktop?: string;
};

const SlideUpModalWrapper = styled(motion.div)<StyledProps>`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  padding: ${({ padding }) => padding && padding};

  @media screen and (min-width: 650px) {
    display: ${({ displaydesktop }) => displaydesktop};
  }
`;

export default SlideUpModal;
