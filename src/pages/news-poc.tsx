import styled from "@emotion/styled";
import Image from "next/image";
import client from "../../client";
import { PortableText } from "@portabletext/react";

import { StyledPageWrapper } from "@components/shared-styles/page-wrappers";
import { NewsItemType } from "../types/newsTypes";
import { Heading, HeadingSm } from "@components/shared-styles/typography";
import { useState } from "react";

const NewsPocPage = ({ newsItems }: { newsItems: NewsItemType[] }) => {
  return (
    <NewsPageWrapper px="l">
      {newsItems.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={`${newsItem.title}-1`} />
      ))}
      {newsItems.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={`${newsItem.title}-2`} />
      ))}
      {newsItems.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={`${newsItem.title}-3`} />
      ))}
    </NewsPageWrapper>
  );
};

export async function getStaticProps() {
  const newsItems = await client.fetch(`
    *[_type == "newsItem"] {
      "author": author -> name,
      body,
      date,
      description,
      body,
      "category": category -> title,
      location { lat, lng },
      "slug": slug.current,
      title,
      image {
        caption,
        "url": asset -> url,
        "height": asset -> metadata.dimensions.height,
        "width": asset -> metadata.dimensions.width,
        "aspectRatio": asset -> metadata.dimensions.aspectRatio,
        "lqip": asset -> metadata.lqip,
        "palette": asset -> metadata.palette
      }
    }
  `);

  return {
    props: {
      newsItems,
    },
  };
}

export default NewsPocPage;

const NewsPageWrapper = styled(StyledPageWrapper)`
  max-width: 50rem; // test on bigger screen --> could use clamp
  margin: auto;
`;

const NewsItem = ({ newsItem }: { newsItem: NewsItemType }) => {
  const { title, description, category, date, image } = newsItem;
  const { url, caption, palette } = image;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NewsItemWrapper onClick={() => setIsOpen((x) => !x)}>
      <ImageGrid>
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <div key={x}>
            <Image
              src={url}
              alt={caption}
              layout="fill"
              objectFit="cover"
              key={url}
              style={{ backgroundColor: palette.dominant.background }}
            />
          </div>
        ))}
      </ImageGrid>
      <NewsText
        title={title}
        description={description}
        category={category}
        date={date}
        descriptionOpen={isOpen}
      />
    </NewsItemWrapper>
  );
};

const NewsItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: var(--gap-s);
  position: relative;
`;

const ImageGrid = styled.div`
  flex-shrink: 0;
  width: 40%;
  height: fit-content;
  position: relative;
  cursor: crosshair;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--gap-s);

  &:hover > div {
    @media screen and (min-width: 700px) {
      outline: 1px solid #000;
    }
  }
  &:active > div {
    outline: 1px solid magenta;
  }

  & > div {
    width: 100%;
    position: relative;
    aspect-ratio: 1;
  }
`;

const NewsText = ({
  title = "",
  description = [],
  category = "",
  date = "",
  descriptionOpen = false,
}) => {
  return (
    <NewsTextWrapper>
      <div>{date}</div>
      <div>
        <Heading>{title}</Heading>
        <HeadingSm>{category}</HeadingSm>
        {descriptionOpen && <PortableText value={description} />}
      </div>
    </NewsTextWrapper>
  );
};

const NewsTextWrapper = styled.div`
  margin-left: var(--gap-s);
  padding-left: var(--gap-s);
  border-left: 0.5px solid var(--gray-4);
`;
