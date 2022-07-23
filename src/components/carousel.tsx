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
    <StyledPageWrapperCentered>
      <Embla>
        {/* what's viewport ref? */}
        <EmblaViewPort ref={viewportRef}>
          <EmblaContainer>
            {slides.map((index) => {
              const { width, height } = mediaByIndex(index);
              console.log(`w: ${width}, h: ${height}`);

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

// TO-DO: currently styled up to here,
//        please understand what each style is doing after finished
const Embla = styled.div`
  padding: var(--gap-xs); // creates the white border effect
`;
const EmblaViewPort = styled.div`
  overflow: hidden;
  padding-top: var(--gap-l); // creates space for the slide text
`;
const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  height: 50vh;
`;
const EmblaSlide = styled.div`
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
