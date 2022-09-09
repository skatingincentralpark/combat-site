import Image from "next/image";
import styled from "@emotion/styled";
import { m } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { NewsItemType } from "../types/newsTypes";

type Props = { newsItem: NewsItemType };

const NewsItem = ({ newsItem }: Props) => {
  const { aspectRatio, height, lqip, palette, width, url, caption } =
    newsItem.image;

  const animateObject = {
    animate: {
      scale: [1, 0.96, 1, 1, 1],
      borderColor: ["#bfffea", "#b3ff6b", "#fffa67", "#C3C48D"],
      borderWidth: ["10px", "30px", "5px", "0px"],
      opacity: ["0%", "100%", "100%", "100%"],
      y: [100, 0, 0, 0, 0],
      borderRadius: ["0rem", "25rem", "2.5rem", "2rem", "2rem"],
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.9, 1],
      repeatDelay: 5,
    },
  };

  return (
    <NewsItemWrapper>
      <NewsItemImageWrapper {...animateObject}>
        <Image
          src={url}
          alt={caption}
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          placeholder="blur"
          blurDataURL={url}
        />
      </NewsItemImageWrapper>
      <NewsItemTextWrapper>
        <NewsItemDate>{newsItem.date}</NewsItemDate>
        <div>
          <NewsItemTitle>
            <div>{newsItem.title}</div>
            <div>
              {newsItem.location.lat.toFixed(2)} °S{" : "}
              {newsItem.location.lng.toFixed(2)} °E
            </div>
          </NewsItemTitle>
          <NewsItemDescription>
            <PortableText value={newsItem.description} />
          </NewsItemDescription>
        </div>
      </NewsItemTextWrapper>
    </NewsItemWrapper>
  );
};

export default NewsItem;

const NewsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-l);

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
const NewsItemImageWrapper = styled(m.div)`
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
