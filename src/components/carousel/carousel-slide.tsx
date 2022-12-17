import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "@components/image";

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
      <Image image={image} quality={75} />
    </EmblaSlide>
  );
};

const EmblaSlide = styled.div`
  transition: min-width 1s ease;
  margin-right: var(--gap-xs); // gap between slides
  height: 100%;
  position: relative;

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
