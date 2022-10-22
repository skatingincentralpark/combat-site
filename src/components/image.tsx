import { useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/future/image";

const Image = ({ image }: { image: ImageType }) => {
  const { url, caption, palette, aspectRatio, width, height } = image;

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => setImageLoaded(true);

  return (
    <FutureImageStyled
      src={url}
      alt={caption || "News Image"}
      width={width}
      height={height}
      onLoadingComplete={doFadeIn}
      loaded={imageLoaded}
    />
  );
};

export default Image;

const FutureImageStyled = styled(FutureImage)<{ loaded: boolean }>`
  height: 100%;
  object-fit: cover;

  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.25s linear;
  will-change: opacity;
`;
