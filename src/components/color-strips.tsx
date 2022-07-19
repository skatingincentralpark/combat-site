import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  colors: string[];
};

const ColorStrips = ({ colors }: Props) => {
  const parentVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerDirection: -1,
        staggerChildren: 0.02,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <ColorBlockWrapper
        variants={parentVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {colors.map((color, i) => (
          <ColorBlock variants={childVariants} color={color} key={i} />
        ))}
        {colors.map((color, i) => (
          <ColorBlock variants={childVariants} color={color} key={i} />
        ))}
        {colors.map((color, i) => (
          <ColorBlock variants={childVariants} color={color} key={i} />
        ))}
      </ColorBlockWrapper>
    </AnimatePresence>
  );
};

export default ColorStrips;

type ColorProps = {
  color: string;
};

const ColorBlockWrapper = styled(motion.div)`
  width: 100%;
  height: 70vh;
  display: flex;
`;
const ColorBlock = styled(motion.div)<ColorProps>`
  background-color: ${({ color }) => color && color};
  width: 50px;
  height: 100%;
  display: inline-block;
  flex-grow: 1;
`;
