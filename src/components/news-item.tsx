import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

type Props = {
  newsItem: {
    author: {};
    body: [];
    description: [];
    category: {};
    date: string;
    image: {
      asset: {
        metadata: {
          aspectRatio: number;
          height: number;
          lqip: string;
          palette: {};
          width: number;
        };
        url: string;
      };
      caption: string;
    };
    location: {
      lat: number;
      lng: number;
    };
    slug: {};
    title: string;
  };
};

const NewsItem = ({ newsItem }: Props) => {
  console.log(newsItem);
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
        <Image
          src={newsItem.image.asset.url}
          alt={newsItem.image.caption}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          blurDataURL={newsItem.image.asset.url}
        />
      </NewsItemImageWrapper>
      <NewsItemTextWrapper>
        <NewsItemDate>{newsItem.date}</NewsItemDate>
        <div>
          <NewsItemTitle>
            <div>{newsItem.title}</div>
            <div>
              {newsItem.location.lat} {newsItem.location.lng}
            </div>
          </NewsItemTitle>
          <NewsItemDescription>
            <PortableText value={newsItem.body} />
          </NewsItemDescription>
        </div>
      </NewsItemTextWrapper>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-l);

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
const NewsItemImageWrapper = styled(motion.div)`
  margin-bottom: var(--gap-m);
  border: 1px solid #c3c48d;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  max-width: 20rem;
  width: 100%;
  flex-shrink: 0;
  height: fit-content;
  transition: aspect-ratio 1s, width 1s, aspect-ratio 1s;
  position: relative;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-m);
    aspect-ratio: 1 / 1;
  }

  /* & > span {
    width: 100%;
    height: 100%;
  } */
`;
const NewsItemTextWrapper = styled.div`
  & > * {
    margin-bottom: var(--gap-s);
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
    margin-right: var(--gap-l);
  }
`;
const NewsItemTitle = styled.div`
  font-weight: 400;
  margin-bottom: var(--gap-s);
`;
const NewsItemDescription = styled.div``;
