import { useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/future/image";
interface Props {
  image: ImageType;
  styles?: CssProperties;
  onClick?: () => void;
}

const Image = ({ image, styles, onClick }: Props) => {
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
      onLoadingComplete={doFadeIn}
      loaded={imageLoaded}
      styles={styles}
      onClick={onClick}
    />
  );
};

export default Image;

const FutureImageStyled = styled(FutureImage)<{
  loaded: boolean;
  styles?: CssProperties;
}>`
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.25s linear;
  will-change: opacity;

  ${({ styles }) => styles}
`;
