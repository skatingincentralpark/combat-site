import { default as NextImage } from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  newsItem: {
    title: string;
    location: string;
    description: string;
    date: string;
    image: string;
  };
};

const NewsItem = ({ newsItem }: Props) => {
  return (
    <NewsItemWrapper>
      <NewsItemImageWrapper
        animate={{
          scale: [1, 0.96, 1, 1, 1],
          borderColor: ["#bfffea", "#b3ff6b", "#fffa67", "#C3C48D"],
          borderWidth: ["10px", "30px", "5px", "0px"],
          opacity: ["0%", "100%", "100%", "100%"],
          y: [100, 0, 0, 0, 0],
          borderRadius: ["0rem", "25rem", "2.5rem", "2rem", "2rem"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.9, 1],
          repeatDelay: 5,
        }}
      >
        <NextImage
          src={newsItem.image}
          alt="Something"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={newsItem.image}
        />
      </NewsItemImageWrapper>
      <NewsItemTextWrapper>
        <NewsItemDate>{newsItem.date}</NewsItemDate>
        <div>
          <NewsItemTitle>
            <div>{newsItem.title}</div>
            <div>{newsItem.location}</div>
          </NewsItemTitle>
          <NewsItemDescription>{newsItem.description}</NewsItemDescription>
        </div>
      </NewsItemTextWrapper>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-xxl);

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
const NewsItemImageWrapper = styled(motion.div)`
  margin-bottom: var(--gap-xl);
  border: 1px solid #c3c48d;
  aspect-ratio: 2 / 3;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 20rem;
  flex-shrink: 0;
  transition: aspect-ratio 1s, width 1s, aspect-ratio 1s;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-xl);
    aspect-ratio: 1 / 1;
  }
`;
const NewsItemTextWrapper = styled.div`
  & > * {
    margin-bottom: var(--gap-l);
  }

  @media screen and (min-width: 650px) {
    display: flex;
    flex-direction: row;
    max-width: 50rem;
  }
`;
const NewsItemDate = styled.div`
  font-weight: 400;
  flex-shrink: 0;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-xxl);
  }
`;
const NewsItemTitle = styled.div`
  font-weight: 400;
  margin-bottom: var(--gap-l);
`;
const NewsItemDescription = styled.div``;
