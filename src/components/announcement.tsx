import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Announcement = () => {
  const announcement = {
    title: "Note:",
    text: "All orders come with complimentary stickers, let us know which ones you love most, and we’ll look to create more in that style, in the future.",
  };

  const [isClosed, setIsClosed] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {!isClosed && (
        <AnnouncementWrapper
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          onClick={() => setIsClosed(true)}
        >
          <AnnouncementInner>
            <div>{announcement.title}</div>
            <div>{announcement.text}</div>
          </AnnouncementInner>
        </AnnouncementWrapper>
      )}
    </AnimatePresence>
  );
};

const AnnouncementWrapper = styled(motion.div)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 2;
  cursor: pointer;
`;

const AnnouncementInner = styled.div`
  margin: 0 var(--gap-xl);
  padding: var(--gap-m) 0;
  border-top: 1px solid var(--gray-2);
  text-align: left;
  display: flex;

  & > div:nth-of-type(2) {
    max-width: 40rem;
    margin-left: var(--gap-l);
  }
`;

export default Announcement;
