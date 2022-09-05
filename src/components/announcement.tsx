import styled from "@emotion/styled";
import { useState } from "react";
import SlideUpModal from "./slide-up-modal";
import { motion } from "framer-motion";

const Announcement = () => {
  const announcement = {
    title: "Note:",
    text: "All orders come with complimentary stickers, let us know which ones you love most, and we’ll look to create more in that style, in the future.",
  };

  const [isClosed, setIsClosed] = useState(false);

  return (
    <SlideUpModal isClosed={isClosed} delay={0.5}>
      <AnnouncementInner
        initial={{ background: "#ea0e0e" }}
        animate={{ background: "#000" }}
        transition={{ delay: 1, duration: 2.5 }}
        onClick={() => setIsClosed(true)}
      >
        <div>
          <strong>{announcement.title}</strong>
        </div>
        <div>{announcement.text}</div>
      </AnnouncementInner>
    </SlideUpModal>
  );
};

const AnnouncementInner = styled(motion.div)`
  padding: var(--gap-xs) var(--gap-m);
  text-align: left;
  display: flex;
  background-color: #000;
  color: #fff;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  & > div:nth-of-type(2) {
    max-width: 40rem;
    margin-left: var(--gap-s);
  }
`;

export default Announcement;
