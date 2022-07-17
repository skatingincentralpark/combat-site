import styled from "@emotion/styled";
import { useState } from "react";
import SlideUpModal from "./slide-up-modal";

const Announcement = () => {
  const announcement = {
    title: "Note:",
    text: "All orders come with complimentary stickers, let us know which ones you love most, and we’ll look to create more in that style, in the future.",
  };

  const [isClosed, setIsClosed] = useState(false);

  return (
    <SlideUpModal
      isClosed={isClosed}
      delay={0.5}
      backgroundColor="var(--yellow-4)"
    >
      <AnnouncementInner onClick={() => setIsClosed(true)}>
        <div>{announcement.title}</div>
        <div>{announcement.text}</div>
      </AnnouncementInner>
    </SlideUpModal>
  );
};

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
