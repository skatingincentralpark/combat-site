import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/future/image";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { StyledPageWrapperCentered } from "./shared-styles/styled-page-wrapper";

type Props = {
  lookbook: {
    _id: string;
    season: string;
    date: string;
    description: [];
    title: string;
    album: {
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
    }[];
  };
};

const Carousel = ({ lookbook }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const parentVariants = {
    hidden: {
      translateX: "var(--translate-distance)",
    },
    show: {
      translateX: 0,
      transition: {
        duration: 0.8,
        ease: "anticipate",
        type: "tween",
      },
    },
  };

  if (!lookbook)
    return <StyledPageWrapperCentered>Loading...</StyledPageWrapperCentered>;

  return (
    <StyledPageWrapperCentered>
      <Embla>
        <EmblaViewPort ref={viewportRef}>
          <AnimatePresence>
            <EmblaContainer
              variants={parentVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {lookbook?.album?.map((image, i) => {
                return <CarouselSlide image={image} key={i} />;
              })}
            </EmblaContainer>
          </AnimatePresence>
        </EmblaViewPort>
      </Embla>
      <LookbookDescription
        title={lookbook.title}
        season={lookbook.season}
        date={lookbook.date}
        description={lookbook.description}
      />
    </StyledPageWrapperCentered>
  );
};

export default Carousel;

type CarouselSlideProps = {
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
};

export const CarouselSlide = ({ image }: CarouselSlideProps) => {
  const { asset, caption } = image;
  const { metadata, url } = asset;
  const { aspectRatio, width, height } = metadata;

  return (
    <EmblaSlide style={{ aspectRatio: `${aspectRatio} / 1` }}>
      {caption && <SlideText>{caption}</SlideText>}
      <Image
        src={url}
        width={width}
        height={height}
        alt={caption}
        placeholder="blur"
        blurDataURL={url}
      />
    </EmblaSlide>
  );
};

type LookbookDescriptionProps = {
  title: string;
  season: string;
  date: string;
  description: [];
};

export const LookbookDescription = ({
  title,
  season,
  date,
  description,
}: LookbookDescriptionProps) => {
  return (
    <FlexRow>
      <div>
        {title}
        <br />
        {season} {date}
      </div>
      <div>
        <PortableText value={description} />
      </div>
    </FlexRow>
  );
};

// TODO: Please understand what each style is doing after finished
const Embla = styled.div`
  padding: var(--gap-xs); // creates the white border effect
`;
const EmblaViewPort = styled(motion.div)`
  overflow: hidden;
  padding-top: var(--gap-l); // creates space for the slide text
`;
const EmblaContainer = styled(motion.div)`
  display: flex;
  user-select: none;
  height: 50vh;

  --translate-distance: -900px;

  @media screen and (min-width: 650px) {
    --translate-distance: -1000px;
  }
`;
const EmblaSlide = styled(motion.div)`
  transition: min-width 1s ease;
  cursor: grab;
  margin-right: var(--gap-xs); // gap between slides
  height: 100%;
  position: relative;

  &:active {
    cursor: grabbing;
  }

  &:last-of-type {
    margin-right: 0;
  }

  & > img {
    height: 100%;
  }
`;
const SlideText = styled.div`
  position: absolute;
  color: var(--text-secondary);
  padding: 0 var(--gap-xxs);
  transform: translate3d(0, calc(-100% - (var(--gap-l) / 4)), 0);
  top: 0;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--gap-xs);

  & > div:nth-of-type(2) {
    text-align: right;
  }
`;
