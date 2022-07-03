import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown((x) => !x);

  const container = {
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
        staggerChildren: 0.02,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <PageWrapper>
      <PaddingWrapper>
        <button onClick={toggle}>GO</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          voluptate eius eum maxime ipsa unde, aut blanditiis earum culpa
          dolorum eos nulla asperiores in soluta enim repudiandae sapiente
          explicabo rerum! Voluptatum ratione ducimus repellat sapiente ipsum
          perferendis, iure sint accusantium voluptates commodi aut cupiditate
          maxime, atque debitis quod sit a reprehenderit aliquid ullam. Qui
          reiciendis numquam officia aut, aliquid enim? Id vitae veritatis
          repellat, unde consequatur tempore dolorum optio illum asperiores
          ipsum officia facilis repudiandae architecto velit mollitia aliquam
          laborum! Veniam dolores necessitatibus quasi doloribus totam,
          consequuntur sequi cupiditate praesentium! Odit dolorem tempore fugit
          recusandae repudiandae aut reiciendis nesciunt doloribus, iure
          eligendi non facere porro quo cum omnis unde fugiat cumque veniam
          mollitia dolores blanditiis? Quis fugit omnis laudantium cumque?
        </p>
      </PaddingWrapper>
      <AnimatePresence>
        {isShown && (
          <ColorBlockWrapper
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ColorBlock variants={item} />
            <ColorBlock1 variants={item} />
            <ColorBlock2 variants={item} />
            <ColorBlock3 variants={item} />
            <ColorBlock4 variants={item} />
            <ColorBlock5 variants={item} />
            <ColorBlock variants={item} />
            <ColorBlock1 variants={item} />
            <ColorBlock2 variants={item} />
            <ColorBlock3 variants={item} />
            <ColorBlock4 variants={item} />
            <ColorBlock5 variants={item} />
            <ColorBlock variants={item} />
            <ColorBlock1 variants={item} />
            <ColorBlock2 variants={item} />
            <ColorBlock3 variants={item} />
            <ColorBlock4 variants={item} />
            <ColorBlock5 variants={item} />
          </ColorBlockWrapper>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-top: var(--gap-page-top);
`;
const PaddingWrapper = styled.div`
  padding: var(--gap-l);
`;
const ColorBlockWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ColorBlock = styled(motion.div)`
  width: 50px;
  height: 100%;
  display: inline-block;
  background-color: var(--green-1);
  flex-grow: 1;
`;
const ColorBlock1 = styled(ColorBlock)`
  background-color: var(--green-2);
`;
const ColorBlock2 = styled(ColorBlock)`
  background-color: var(--green-3);
`;
const ColorBlock3 = styled(ColorBlock)`
  background-color: var(--yellow-1);
`;
const ColorBlock4 = styled(ColorBlock)`
  background-color: var(--yellow-2);
`;
const ColorBlock5 = styled(ColorBlock)`
  background-color: var(--olive-1);
`;
