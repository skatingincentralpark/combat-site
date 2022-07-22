import { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../../public/images/carousel-images";
import { StyledPageWrapper } from "./shared-styles/styled-page-wrapper";
import Image from "./image";
import { default as NextImage } from "next/image";

// TODO: https://www.embla-carousel.com/plugins/wheel-gestures/
type Props = {
  slides: number[];
};

const Carousel = ({ slides }: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({
    // dragFree: true,
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
    <StyledPageWrapper>
      <Embla>
        {/* what's viewport ref? */}
        <EmblaViewPort ref={viewportRef}>
          <EmblaContainer>
            {slides.map((index) => (
              <EmblaSlide key={index}>
                <EmblaSlideInner>
                  <NextImage
                    src={mediaByIndex(index).src}
                    alt="Picture of the author"
                    layout="responsive"
                    objectFit="contain"
                    width="100%"
                    height="150px"
                    placeholder="blur"
                    blurDataURL={mediaByIndex(index).blurDataURL}
                  />
                </EmblaSlideInner>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewPort>
      </Embla>
    </StyledPageWrapper>
  );
};

export default Carousel;

const Embla = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
const EmblaViewPort = styled.div`
  overflow: hidden;
  width: 100%;

  /* .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  } */
`;
const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* margin-left: -10px; */
`;
const EmblaSlide = styled.div`
  /* position: relative; */
  transition: min-width 1s ease;
  min-width: 90%;

  @media screen and (min-width: 400px) {
    min-width: 70%;
  }
  @media screen and (min-width: 700px) {
    min-width: 40%;
  }
  @media screen and (min-width: 1000px) {
    min-width: 20%;
    /* 
    &:nth-child(5) {
      min-width: 90%;
    }

    &:nth-child(6) {
      min-width: 25%;
    }

    &:nth-child(7) {
      min-width: 50%;
    }

    &:nth-child(8) {
      min-width: 80%;
    } */
  }
  /* padding-left: 10px; */
`;
// TO-DO: currently styled up to here,
//        please understand what each style is doing after finished
const EmblaSlideInner = styled.div``;
