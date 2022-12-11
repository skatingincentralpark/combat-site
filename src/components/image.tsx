import { useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/image";
import { transientOptions } from "@lib/helpers";

interface Props {
  image: ImageType;
  quality?: number;
  styles?: CssProperties;
  placeholder?: "blur" | "empty";
  onClick?: () => void;
}

/*
 * Default placeholder is "empty" which uses dominantColor
 * Blurred doesn't fade in, which isn't nice
 */

const Image = ({
  image,
  quality,
  styles,
  placeholder = "empty",
  onClick,
}: Props) => {
  const { url, caption, lqip, dominantColor, aspectRatio, width, height } =
    image;

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => setImageLoaded(true);

  return (
    <ImageContainer css={styles}>
      {placeholder === "empty" && (
        <DominantColor
          $loaded={imageLoaded}
          style={{
            aspectRatio: aspectRatio,
            backgroundColor: dominantColor,
          }}
        />
      )}
      <FutureImageStyled
        src={url}
        alt={caption}
        width={width}
        height={height}
        blurDataURL={lqip}
        onLoadingComplete={doFadeIn}
        $loaded={placeholder === "blur" ? true : imageLoaded}
        onClick={onClick}
        placeholder={placeholder}
        quality={quality || 100}
      />
    </ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const FutureImageStyled = styled(FutureImage, transientOptions)<{
  $loaded: boolean;
  styles?: CssProperties;
}>`
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.25s linear;
  object-fit: contain;
  will-change: opacity;
  width: fit-content;
  height: 100%;
  width: 100%;
  ${({ styles }) => styles}
`;
const DominantColor = styled("div", transientOptions)<{
  $loaded: boolean;
}>`
  opacity: ${({ $loaded }) => ($loaded ? 0 : 1)};
  transition: opacity 0.25s linear;
  transition: opacity 500ms linear 0s;
  border-radius: 2rem;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;
