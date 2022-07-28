import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/images/carousel-images";
import { StyledPageWrapperCentered } from "./shared-styles/styled-page-wrapper";
import Image from "./image";
import { default as NextImage } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// TODO: https://www.embla-carousel.com/plugins/wheel-gestures/
type Props = {
  slides: number[];
};

const Carousel = ({ slides }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
  });

  // TODO: Can be used to gray out next/prev buttons when reach the start/end
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

  return (
    <StyledPageWrapperCentered>
      <ButtonContainer>
        <button onClick={scrollPrev}>Prev</button>
        <button onClick={scrollNext}>Next</button>
      </ButtonContainer>
      <Embla>
        {/* what's viewport ref? */}
        <EmblaViewPort ref={viewportRef}>
          <AnimatePresence>
            <EmblaContainer
              variants={parentVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {slides.map((index) => {
                const { width, height } = mediaByIndex(index);
                return (
                  <EmblaSlide
                    key={index}
                    style={{ aspectRatio: `${width} / ${height}` }}
                  >
                    {index === 0 && (
                      <SlideText>Oslo 52.3676° N, 4.9041° E</SlideText>
                    )}
                    <img src={mediaByIndex(index).src} alt="" />
                  </EmblaSlide>
                );
              })}
            </EmblaContainer>
          </AnimatePresence>
        </EmblaViewPort>
      </Embla>
      <FlexRow>
        <div>
          Spring Song Days
          <br />
          Spring / Summer 2022
        </div>
        <div>
          first weplant
          <br />
          theseed
          <br />
          inourminds then
          <br />
          weleavetherestto[...]
          <br />
        </div>
      </FlexRow>
    </StyledPageWrapperCentered>
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
  padding: 0 var(--gap-s);

  & > div:nth-of-type(2) {
    text-align: right;
  }
`;
const ButtonContainer = styled(FlexRow)`
  max-width: 9rem;
`;
