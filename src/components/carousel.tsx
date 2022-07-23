import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/images/carousel-images";
import { StyledPageWrapperCentered } from "./shared-styles/styled-page-wrapper";
import Image from "./image";
import { default as NextImage } from "next/image";

// TODO: https://www.embla-carousel.com/plugins/wheel-gestures/
type Props = {
  slides: number[];
};

const Carousel = ({ slides }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
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

  return (
    <StyledPageWrapperCentered>
      <Embla>
        {/* what's viewport ref? */}
        <EmblaViewPort ref={viewportRef}>
          <EmblaContainer>
            {slides.map((index) => (
              <EmblaSlide key={index}>
                <img src={mediaByIndex(index).src} alt="" />
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewPort>
      </Embla>
      {/* <Tester>
        {slides.map((index) => (
          <img src={mediaByIndex(index).src} alt="" />
        ))}
      </Tester> */}
    </StyledPageWrapperCentered>
  );
};

export default Carousel;

const Embla = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: var(--gap-xs);
`;
const EmblaViewPort = styled.div`
  overflow: hidden;
`;
const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
`;
const EmblaSlide = styled.div`
  transition: min-width 1s ease;
  cursor: grab;
  margin-right: var(--gap-xs);
  min-width: 90%;

  @media screen and (min-width: 400px) {
    min-width: 70%;
  }
  @media screen and (min-width: 700px) {
    min-width: 40%;
  }
  @media screen and (min-width: 1000px) {
    min-width: 20%;
  }

  &:active {
    cursor: grabbing;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
// TO-DO: currently styled up to here,
//        please understand what each style is doing after finished
const EmblaSlideInner = styled.div``;

const Tester = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  gap: 1rem;
  padding: 0 1rem;
  overflow-x: auto;

  & > * {
    height: 100%;
  }
`;
