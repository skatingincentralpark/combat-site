import { useState } from "react";
import FutureImage from "next/future/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CarouselSlide = ({
  image,
  onClick,
}: {
  image: ImageType;
  onClick?: any;
}) => {
  const { aspectRatio, height, lqip, dominantColor, width, url, caption } =
    image;

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  return (
    <EmblaSlide
      css={css`
        aspect-ratio: ${aspectRatio / 1};
      `}
      onClick={onClick && onClick}
    >
      {caption && <SlideText>{caption}</SlideText>}
      <FutureImage
        src={url}
        alt={caption}
        width={width}
        height={height}
        // className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
        // onLoadingComplete={doFadeIn}
        placeholder="blur"
        blurDataURL={lqip}
      />
    </EmblaSlide>
  );
};

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

  & > img {
    height: 100%;

    &.transparent {
      opacity: 0;
      transition: opacity 0.25s linear;
      will-change: opacity;
    }
    &.hasLoaded {
      opacity: 1;
    }
  }
`;
const SlideText = styled.div`
  position: absolute;
  color: var(--text-secondary);
  padding: 0 var(--gap-xxs);
  transform: translate3d(0, calc(-100% - (var(--gap-l) / 4)), 0);
  top: 0;
`;
