import styled from "@emotion/styled";
import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((x) => !x)}>click</button>
      <AnimatePresence>
        {open && (
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
        )}
      </AnimatePresence>
    </>
  );
};

export default ColorStrips;

type ColorProps = {
  color: string;
};

const ColorBlockWrapper = styled(m.div)`
  width: 100%;
  height: 70vh;
  display: flex;
`;
const ColorBlock = styled(m.div)<ColorProps>`
  background-color: ${({ color }) => color && color};
  width: 50px;
  height: 100%;
  display: inline-block;
  flex-grow: 1;
`;
