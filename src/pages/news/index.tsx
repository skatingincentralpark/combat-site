import { useState } from "react";
import FutureImage from "next/future/image";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import { PortableText } from "@portabletext/react";
import client from "../../../client";

import { NewsItemType } from "../../types/newsTypes";
import {
  Heading,
  HeadingSm,
  TextXsm,
} from "@components/shared-styles/typography";
import HeadSEO from "@components/head-seo";

const NewsPocPage = ({ newsItems }: { newsItems: NewsItemType[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <NewsPageWrapper initial="hidden" animate="show" variants={container}>
      <HeadSEO title="News" />
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

const NewsPageWrapper = styled(m.main)`
  width: 100%;
  height: fit-content;
  padding-top: var(--gap-page-top);
  padding-bottom: var(--gap-xl);
  padding-left: 0;
  padding-right: 0;

  max-width: 50rem; // test on bigger screen --> could use clamp
  margin: auto;

  @media screen and (min-width: 700px) {
    padding-top: 12rem;
    padding-left: var(--gap-s);
    padding-right: var(--gap-s);
  }
`;

const NewsItem = ({ newsItem }: { newsItem: NewsItemType }) => {
  const { title, description, category, date, images, location, body } =
    newsItem;

  const [isOpen, setIsOpen] = useState(false);

  // Creates an array of at least 6 items
  const atLeastSixArray = images
    ? [...images, ...Array(6 - images.length)]
    : [...Array(6)];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, translateY: -30 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <NewsItemWrapper onClick={() => setIsOpen((x) => !x)} variants={item}>
      <ImageGrid variants={container}>
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

const NewsItemWrapper = styled(m.div)`
  flex-direction: row;
  justify-content: start;
  margin-bottom: var(--gap-s);
  position: relative;
  display: block;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const ImageGrid = styled(m.div)`
  flex-shrink: 0;
  width: 90%;
  height: fit-content;
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: var(--gap-xxs);

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--gap-s);
    width: 40%;
  }

  &:hover > div {
    @media screen and (min-width: 700px) {
      outline: 0.5px solid black;
    }
  }

  &:active > div {
    outline: 1px solid magenta;
  }
`;

const NewsImage = ({ image }: { image: ImageType | undefined }) => {
  const item = {
    hidden: {
      opacity: 0,
      background: "#b3ff00",
      translateY: -20,
    },
    show: {
      opacity: 1,
      background: "var(--gray-1)",
      translateY: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  if (!image) return <ImageWrapper variants={item} />;

  const { url, caption, palette, aspectRatio, width, height } = image;

  return (
    <ImageWrapper
      style={{
        // aspectRatio: `${aspectRatio} / 1`,
        backgroundColor: palette.dominant.background,
      }}
      variants={{
        hidden: {
          opacity: 0,
          background: "#ff0000",
          translateY: -20,
        },
        show: {
          opacity: 1,
          background: palette.dominant.background,
          translateY: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
          },
        },
      }}
    >
      <FutureImage
        src={url}
        alt={caption || "News Image"}
        width={width}
        height={height}
        className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
        onLoadingComplete={doFadeIn}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled(m.div)`
  background-color: var(--gray-1);
  width: 100%;
  position: relative;
  aspect-ratio: 1;
  user-select: none;
  cursor: crosshair;
  outline: 1px solid white;
  overflow: hidden;

  & > img {
    height: 100%;
    object-fit: cover;

    &.transparent {
      opacity: 0;
      transition: opacity 0.25s linear;
      will-change: opacity;
    }
    &.hasLoaded {
      opacity: 1;
    }
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
      // width: 0,
      height: 0,
      backgroundColor: "#000",
      marginTop: 0,
    },
    animate: {
      // width: "100%",
      // height: "20rem",
      height: "fit-content",
      backgroundColor: "#fff",
      marginTop: "3rem",
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
    },
    exit: {
      // width: 0,
      height: 0,
      backgroundColor: "#000",
      marginTop: 0,
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
                <div className="desc-coords">
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
  /* overflow: scroll; */
  /* max-height: 20rem; */
  overflow: hidden;
  margin-top: 3rem;

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

  .desc-coords {
    font-family: "Courier New", Courier, monospace;
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

    h2 {
      // using margin collapse, add margin-top to h2 to create a nicer animation
      margin-bottom: 3rem;
    }
  }

  /* font-family: "Bitcount Mono Single Lt Circle", "Courier New", Courier; */
  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; */
  /* -webkit-font-smoothing: initial; */
  /* font-weight: 400; */
`;
