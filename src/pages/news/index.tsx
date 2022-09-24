import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import { PortableText } from "@portabletext/react";
import client from "../../../client";

import { StyledPageWrapper } from "@components/shared-styles/page-wrappers";
import { NewsItemType } from "../../types/newsTypes";
import { Heading, HeadingSm } from "@components/shared-styles/typography";

const NewsPocPage = ({ newsItems }: { newsItems: NewsItemType[] }) => {
  return (
    <NewsPageWrapper px="l">
      {newsItems.map((newsItem) => (
        <NewsItem newsItem={newsItem} key={`${newsItem.title}-1`} />
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
      images[] {
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
  padding-top: var(--gap-page-top);

  @media screen and (min-width: 700px) {
    padding-top: 12rem;
  }
`;

const NewsItem = ({ newsItem }: { newsItem: NewsItemType }) => {
  const { title, description, category, date, images, location } = newsItem;

  const [isOpen, setIsOpen] = useState(false);

  // Creates an array of at least 6 items
  const atLeastSixArray = images
    ? [...images, ...Array(6 - images.length)]
    : [...Array(6)];

  return (
    <NewsItemWrapper onClick={() => setIsOpen((x) => !x)}>
      <ImageGrid>
        {atLeastSixArray?.map((x, i) => (
          <NewsImage key={i} image={x} />
        ))}
      </ImageGrid>
      <NewsText
        title={title}
        description={description}
        category={category}
        date={date}
        descriptionOpen={isOpen}
        location={location}
      />
    </NewsItemWrapper>
  );
};

const NewsItemWrapper = styled.div`
  flex-direction: row;
  justify-content: start;
  margin-bottom: var(--gap-s);
  position: relative;
  display: block;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const ImageGrid = styled.div`
  flex-shrink: 0;
  width: 70%;
  height: fit-content;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--gap-s);

  @media screen and (min-width: 700px) {
    width: 40%;
  }

  &:hover > div {
    @media screen and (min-width: 700px) {
      outline: 1px solid var(--gray-2);
    }
  }

  &:active > div {
    outline: 1px solid magenta;
  }
`;

const NewsImage = ({ image }: { image: ImageType | undefined }) => {
  if (!image) return <ImageWrapper />;

  const { url, caption, palette, aspectRatio } = image;

  return (
    <ImageWrapper
      style={{
        backgroundColor: `white`,
        aspectRatio: `${aspectRatio} / 1`,
      }}
    >
      <Image
        src={url}
        alt={caption}
        layout="fill"
        objectFit="cover"
        key={url}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  background-color: var(--gray-1);
  width: 100%;
  position: relative;
  aspect-ratio: 1;
  user-select: none;
  cursor: crosshair;

  & > img {
    height: 100%;
  }
`;

const NewsText = ({
  title = "",
  description = [],
  category = "",
  date = "",
  location = { lat: 0, lng: 0 },
  descriptionOpen = false,
}) => {
  const newsDescriptionVariants = {
    initial: {
      width: 0,
      height: 0,
      backgroundColor: "#000",
    },
    animate: {
      width: "100%",
      height: "20rem",
      backgroundColor: "#fff",
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
    },
    exit: {
      width: 0,
      height: 0,
      backgroundColor: "#000",
    },
  };

  return (
    <NewsTextWrapper>
      <div>{date}</div>
      <div>
        <Heading>{title}</Heading>
        <HeadingSm>{category}</HeadingSm>
        <AnimatePresence>
          {descriptionOpen && (
            <Description {...newsDescriptionVariants}>
              <div>
                <div>
                  {location.lat.toFixed(2)} °S{" : "}
                  {location.lng.toFixed(2)} °E
                </div>
                <PortableText value={description} />
              </div>
            </Description>
          )}
        </AnimatePresence>
      </div>
    </NewsTextWrapper>
  );
};

const Description = styled(m.div)`
  overflow: scroll;
  max-height: 20rem;

  & > div {
    padding: var(--gap-xs);

    @media screen and (min-width: 700px) {
      padding: 0;
    }

    & > div {
      margin-bottom: var(--gap-3xs);
      -webkit-font-smoothing: initial;
    }
  }
`;
const NewsTextWrapper = styled.div`
  flex-grow: 1;
  margin-left: var(--gap-s);
  padding-left: var(--gap-s);
  border-left: 0.5px solid var(--gray-4);
  user-select: none;
  padding-top: var(--gap-s);

  @media screen and (min-width: 700px) {
    padding-top: 0;
  }
  /* font-family: "Bitcount Mono Single Lt Circle", "Courier New", Courier; */
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
  /* -webkit-font-smoothing: initial; */
  /* font-weight: 400; */
`;
