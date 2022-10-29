import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import FutureImage from "next/future/image";
import { clamp } from "@lib/helpers";
import { m, AnimatePresence } from "framer-motion";
import { client, imageBuilder } from "@lib/sanity";
import { LookbookType } from "types/lookbookTypes";
import queries from "@lib/queries";

const LookbookPOC = ({ lookbook }: LookbookType) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const media = lookbook.album;
  const length = media.length;

  const prev = () => {
    if (selectedIndex === 0) setSelectedIndex(length - 1);
    else setSelectedIndex((x) => (x -= 1));
  };

  const next = () => {
    if (selectedIndex === length - 1) setSelectedIndex(0);
    else setSelectedIndex((x) => (x += 1));
  };

  return (
    <PageWrapper>
      <Wrapper>
        <MainImageContainer>
          <MainImage media={media} selectedIndex={selectedIndex} />
          <TextContainer>
            <div>
              {selectedIndex + 1}/{length}
            </div>
            <div>
              <b>Spring / Summer 2020</b>
            </div>
            <div>6 Panel &apos;Natural Slub&apos; Tee</div>
          </TextContainer>
        </MainImageContainer>
        <ThumbnailsContainer>
          <Thumbnails>
            {media.map((x, i) => (
              <div key={x.url} onClick={() => setSelectedIndex(i)}>
                <Thumbnail image={x} />
              </div>
            ))}
          </Thumbnails>
          <TextContainer>
            <div>Archive</div>
            <div
              css={css`
                display: flex;
                gap: 1rem;
              `}
            >
              <button onClick={prev}>&#8592; </button>
              <button onClick={next}> &#8594;</button>
            </div>
          </TextContainer>
        </ThumbnailsContainer>
      </Wrapper>
    </PageWrapper>
  );
};

export default LookbookPOC;

export const getStaticProps = async () => {
  const lookbook = await client.fetch(
    `
      *[_type == "lookbook"] {
        _id,
        "slug": slug.current,
        "slugsAll": *[_type == "lookbook"][].slug.current,
        season,
        date,
        description,
        title,
        album[]{ 
          ${queries.imageMeta}
        }
      }[0]
    `
  );
  return {
    props: {
      lookbook,
    },
  };
};

const PageWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: var(--gap-3xs);
  height: fit-content;
  width: 100%;
  max-width: ${clamp(450, 500, 1400, 2000)};

  @media screen and (min-width: 450px) {
    align-items: flex-end;
  }
`;

const MainImageContainer = styled.div`
  padding-right: var(--gap-3xs);
  flex-grow: 1;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const ThumbnailsContainer = styled.div`
  width: 6rem;
  flex-shrink: 0;

  @media screen and (min-width: 450px) {
    width: 8rem;
  }
`;
const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--gap-3xs);

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  height: 4rem;
  margin-top: var(--gap-m);
`;

const MainImage = ({
  media,
  selectedIndex,
}: {
  media: ImageType[];
  selectedIndex: number;
}) => {
  const variants = {
    out: { opacity: 0, transition: { duration: 0.05 } },
    in: { opacity: 1, transition: { duration: 0.25 } },
  };

  const image = media[selectedIndex];

  return (
    <AnimatePresence initial={false} mode="wait">
      <MotionDiv
        key={selectedIndex}
        variants={variants}
        initial="out"
        animate="in"
        exit="out"
        css={css`
          aspect-ratio: 2 / 3;
          outline: 1px solid black;
        `}
      >
        <FutureImage
          src={image.url}
          alt="friend"
          height={image.height}
          width={image.width}
          placeholder="blur"
          blurDataURL={image.lqip}
        />
      </MotionDiv>
    </AnimatePresence>
  );
};

const MotionDiv = styled(m.div)`
  position: relative;
`;

const Thumbnail = ({ image }: { image: ImageType }) => {
  // const urlFor = (source: AssetType) => imageBuilder.image(source);
  // const lowQualUrl = urlFor(image.asset).width(300).url();

  return (
    <FutureImage
      src={image.url}
      alt="friend"
      height={image.height}
      width={image.width}
      placeholder="blur"
      blurDataURL={image.lqip}
      css={css`
        aspect-ratio: 2 / 3;
        object-fit: cover !important;
      `}
    />
  );
};
