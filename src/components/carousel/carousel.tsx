import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { m, AnimatePresence } from "framer-motion";
import { LookbookType } from "types/lookbookTypes";
import { CarouselSlide } from "./carousel-slide";
import Lightbox from "@components/lightbox";

const Carousel = ({ lookbook }: { lookbook: LookbookType }) => {
  const { album } = lookbook || {};
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    startIndex: Math.min(album?.length - 1, 10), // limit start index for initial slide in animation
    slidesToScroll: "auto", // TO-DO: Make this only on desktop viewports I think
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
    if (embla) embla?.scrollTo(0);
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (i: number) => {
    embla?.clickAllowed() && setLightboxImageIndex(i);
  };
  const closeLightbox = () => setLightboxImageIndex(null);

  return (
    <Embla>
      <ButtonContainer>
        <button onClick={scrollPrev}>Prev</button>
        <button onClick={scrollNext}>Next</button>
      </ButtonContainer>
      <AnimatePresence>
        {typeof lightboxImageIndex === "number" && (
          <Lightbox image={album[lightboxImageIndex]} onClick={closeLightbox} />
        )}
      </AnimatePresence>
      <EmblaViewPort ref={viewportRef}>
        <AnimatePresence>
          <EmblaContainer>
            {album?.map((image, i) => {
              return (
                <CarouselSlide
                  image={image}
                  key={i}
                  onClick={() => openLightbox(i)}
                />
              );
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
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;
const ButtonContainer = styled.div`
  margin-bottom: var(--gap-s);

  & > * {
    margin-right: var(--gap-s);
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
  justify-content: space-between;
  pointer-events: none;

  & > button {
    width: 10%;
    outline: 1px dashed transparent;
    transition: outline 300ms;
    animation: CarouselNav 1000ms ease forwards;

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

  @keyframes CarouselNav {
    0% {
      background-color: var(--yellow-2);
    }
    50% {
      background-color: var(--yellow-2);
    }
    100% {
      background-color: transparent;
    }
  }

  @media screen and (min-width: 650px) {
    display: flex;
  }
`;
