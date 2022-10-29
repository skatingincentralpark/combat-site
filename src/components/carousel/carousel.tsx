import { useState, useEffect, useCallback } from "react";
import FutureImage from "next/future/image";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";
import { m, AnimatePresence } from "framer-motion";
import { LookbookType } from "../../types/lookbookTypes";
import { CarouselSlide } from "./carousel-slide";

const Carousel = ({ lookbook }: LookbookType) => {
  const { album } = lookbook || {};
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: "trimSnaps",
    startIndex: Math.min(album?.length - 1, 10), // limit start index for initial slide in animation
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
  // console.log(embla?.clickAllowed);
  const openLightbox = (i: number) => {
    embla?.clickAllowed() && setLightboxImageIndex(i);
  };
  const closeLightbox = () => setLightboxImageIndex(null);

  return (
    <Embla>
      {/* <ButtonContainerFull>
        <button onClick={scrollPrev} />
        <button onClick={scrollNext} />
      </ButtonContainerFull> */}
      {typeof lightboxImageIndex === "number" && (
        <Lightbox image={album[lightboxImageIndex]} onClick={closeLightbox} />
      )}
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

const Lightbox = ({
  image,
  onClick,
}: {
  image: ImageType;
  onClick: () => void;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!image) return null;

  const doFadeIn = () => setImageLoaded(true);

  return (
    <LightboxStyled onClick={onClick}>
      <FutureImageStyled
        src={image.url}
        alt={image.caption}
        width={image.width}
        height={image.height}
        loaded={imageLoaded}
        className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
        onLoadingComplete={doFadeIn}
        // placeholder="blur"
        // blurDataURL={image.lqip}
      />
    </LightboxStyled>
  );
};

const LightboxStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  backdrop-filter: blur(10px);
  background-color: white;

  img {
    height: 100%;
    object-fit: contain;
  }
`;
const FutureImageStyled = styled(FutureImage)<{ loaded: boolean }>`
  height: 100%;
  object-fit: cover;

  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.3s linear;
  will-change: opacity;
`;
