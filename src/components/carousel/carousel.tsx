import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { LookbookType } from "../../types/lookbookTypes";
import { CarouselSlide } from "./carousel-slide";

const Carousel = ({ lookbook }: LookbookType) => {
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

  if (!lookbook) return <p>Loading...</p>;

  return (
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
  );
};

export default Carousel;

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
