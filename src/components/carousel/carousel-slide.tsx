import Image from "next/future/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CarouselSlide = ({ image }: ImageType) => {
  const { aspectRatio, height, lqip, palette, width, url, caption } = image;

  console.log(palette);

  return (
    <EmblaSlide style={{ aspectRatio: `${aspectRatio} / 1` }}>
      {caption && <SlideText>{caption}</SlideText>}
      <Image
        src={url}
        width={width}
        height={height}
        alt={caption}
        style={{ backgroundColor: palette.dominant.background }}
      />
    </EmblaSlide>
  );
};

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
