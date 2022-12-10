import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, m } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { client } from "@lib/sanity";
import Link from "next/link";
import queries from "@lib/queries";

import { NewsItemType } from "types/newsTypes";
import { Heading, HeadingSm } from "@components/shared-styles/typography";
import HeadSEO from "@components/head-seo";
import Image from "@components/image";

const NewsIndexPage = ({ newsItems }: { newsItems: NewsItemType[] }) => {
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
      {newsItems.map((newsItem, i) => (
        <NewsItem newsItem={newsItem} key={`${newsItem.title}-1`} index={i} />
      ))}
    </NewsPageWrapper>
  );
};

export async function getStaticProps() {
  const newsItems: NewsItemType[] = await client.fetch(`
    *[_type == "newsItem"] {
      title,
      subtitle,
      "slug": slug.current,
      excerpt,
      location { lat, lng },
      credits[] {
        "author": author -> name,
        role
      },
      category,
      date,
      previewImages[] {
        ${queries.imageMeta}
      }
    }
  `);

  return {
    props: {
      newsItems,
    },
  };
}

export default NewsIndexPage;

const NewsPageWrapper = styled(m.main)`
  width: 100%;
  height: fit-content;
  padding-top: var(--gap-page-top);
  padding-bottom: var(--gap-xl);
  padding-left: 0;
  padding-right: 0;
  display: flex;
  flex-direction: column;

  max-width: 50rem; // test on bigger screen --> could use clamp
  margin: auto;

  @media screen and (min-width: 700px) {
    padding-top: 10rem;
    padding-left: var(--gap-s);
    padding-right: var(--gap-s);
  }
`;

const NewsItem = ({
  newsItem,
  index,
}: {
  newsItem: NewsItemType;
  index: number;
}) => {
  const { title, excerpt, category, date, previewImages, location, slug } =
    newsItem || {};

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const openFirstItem = setTimeout(() => {
  //     if (index === 0) {
  //       setIsOpen(true);
  //     }
  //   }, 200);

  //   return () => clearTimeout(openFirstItem);
  // }, []);

  // Creates an array of at least 6 items
  const atLeastSixArray = previewImages
    ? [...previewImages, ...Array(6 - previewImages.length)]
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
    <NewsItemWrapper variants={item}>
      <ImageGrid variants={container} onClick={() => setIsOpen((x) => !x)}>
        {atLeastSixArray?.map((x, i) => (
          <NewsImage key={i} image={x} />
        ))}
      </ImageGrid>
      <NewsText
        title={title}
        excerpt={excerpt}
        category={category}
        date={date}
        descriptionOpen={isOpen}
        location={location}
        slug={slug}
        onClick={() => setIsOpen((x) => !x)}
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

  if (!image) return <ImageWrapper variants={item} />; // return dummy item

  const { url, caption, dominantColor, aspectRatio, width, height } = image;

  return (
    <ImageWrapper
      style={{
        backgroundColor: dominantColor,
      }}
      variants={{
        hidden: {
          opacity: 0,
          background: "#ff0000",
          translateY: -20,
        },
        show: {
          opacity: 1,
          background: dominantColor,
          translateY: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
          },
        },
      }}
    >
      <Image image={image} />
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
  excerpt = [],
  category = "",
  date = "",
  location = { lat: 0, lng: 0 },
  descriptionOpen = false,
  slug = "",
  onClick = () => {},
}) => {
  const newsDescriptionVariants = {
    initial: {
      height: 0,
      backgroundColor: "#000",
      marginTop: 0,
    },
    animate: {
      height: "fit-content",
      backgroundColor: "#fff",
      marginTop: "3rem",
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
    },
    exit: {
      height: 0,
      backgroundColor: "#000",
      marginTop: 0,
    },
  };

  return (
    <NewsTextWrapper>
      <NewsTextHeading onClick={onClick}>
        <div>
          <div>{date}</div>
          <Heading>{title}</Heading>
          <HeadingSm>{category}</HeadingSm>
        </div>
      </NewsTextHeading>
      <AnimatePresence>
        {descriptionOpen && (
          <Description {...newsDescriptionVariants}>
            <Cta>
              <Link href={`news/${slug}`}>Read More</Link>
            </Cta>
            <DescriptionBody>
              <div className="coords">
                {location?.lat.toFixed(2) || "--"} °S{" : "}
                {location?.lng.toFixed(2) || "--"} °E
              </div>
              <PortableText value={excerpt} />
            </DescriptionBody>
          </Description>
        )}
      </AnimatePresence>
    </NewsTextWrapper>
  );
};

const Description = styled(m.div)`
  white-space: ellipsis;
  overflow: hidden;
  margin-top: 3rem;
`;
const DescriptionBody = styled.div`
  margin-bottom: 3rem;

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

  .coords {
    margin-bottom: var(--gap-s);
    padding-left: 0;
  }
`;
const Cta = styled.div`
  display: block;
  cursor: pointer;
  /* background-color: lightgray;
  border-radius: 0.25rem; */
  border-top: 0.5px solid var(--gray-4);
  border-bottom: 0.5px solid var(--gray-4);
  margin-top: 2rem;

  @media screen and (min-width: 700px) {
    margin-bottom: 2rem;
  }

  & > a {
    display: block;
    padding: 0.25rem 0.75rem;
  }

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--yellow-1);
    }
  }

  &:active {
    background-color: var(--yellow-2);
  }
`;
const NewsTextWrapper = styled.div`
  flex-grow: 1;
  margin-left: var(--gap-s);
  border-left: 0.5px solid var(--gray-4);
  user-select: none;
  padding-left: var(--gap-s);
  padding-right: var(--gap-s);
  padding-top: var(--gap-s);

  @media screen and (min-width: 700px) {
    padding-right: 0;
    padding-top: 0;

    h2 {
      // using margin collapse, add margin-top to h2 to create a nicer animation
      margin-bottom: 3rem;
    }
  }
`;
const NewsTextHeading = styled.div`
  cursor: pointer;

  &:hover > div {
    @media screen and (min-width: 700px) {
      /* border-width: 10px;
      padding-left: var(--gap-s); */
      transform: translateX(5px);
    }
  }

  &:active > div {
    /* border-width: 10px;
    padding-left: var(--gap-s);
    border-color: var(--gray-2); */
  }

  & > div {
    border-left: 0px solid var(--gray-1);
    transition: transform 0.1s ease, border 0.1s ease;
  }
`;
