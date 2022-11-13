import { useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/image";
import { transientOptions } from "@lib/helpers";

interface Props {
  image: ImageType;
  quality?: number;
  styles?: CssProperties;
  onClick?: () => void;
}

const Image = ({ image, quality, styles, onClick }: Props) => {
  const { url, caption, lqip, dominantColor, aspectRatio, width, height } =
    image;

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => setImageLoaded(true);

  return (
    <FutureImageStyled
      src={url}
      alt={caption}
      width={width}
      height={height}
      blurDataURL={lqip}
      // onLoadingComplete={doFadeIn}
      $loaded={imageLoaded}
      styles={styles}
      onClick={onClick}
      placeholder="blur"
      quality={quality || 100}
      style={{ aspectRatio: aspectRatio }}
    />
  );
};

export default Image;

const FutureImageStyled = styled(FutureImage, transientOptions)<{
  $loaded: boolean;
  styles?: CssProperties;
}>`
  /* opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.25s linear; */
  will-change: opacity;
  width: fit-content;
  height: fit-content;
  ${({ styles }) => styles}
`;
