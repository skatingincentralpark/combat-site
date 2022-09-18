import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { m, AnimatePresence } from "framer-motion";
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
      <ButtonContainerFull>
        <button onClick={scrollPrev} />
        <button onClick={scrollNext} />
      </ButtonContainerFull>
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
  position: relative;
`;
const EmblaViewPort = styled.div`
  overflow: hidden;
  padding-top: var(--gap-l); // creates space for the slide text
`;
const EmblaContainer = styled(m.div)`
  display: flex;
  user-select: none;
  height: 50vh;

  --translate-distance: -900px;

  @media screen and (min-width: 650px) {
    --translate-distance: -1000px;
  }
`;
const ButtonContainerFull = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: none;
  flex-direction: row;

  & > button {
    flex-grow: 1;
    outline: 1px dashed transparent;
    transition: outline 300ms;

    &:active {
      outline: 1px dashed magenta;
    }
  }
  & > button:first-of-type {
    cursor: w-resize;
  }
  & > button:last-of-type {
    cursor: e-resize;
  }

  @media screen and (min-width: 650px) {
    display: flex;
  }
`;
