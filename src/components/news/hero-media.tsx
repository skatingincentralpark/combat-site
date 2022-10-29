import styled from "@emotion/styled";
import { HeroMediaType } from "types/newsTypes";
import Video from "@components/video";
import { css } from "@emotion/react";
import FutureImage from "next/future/image";

const HeroMedia = ({ heroMedia }: { heroMedia: HeroMediaType }) => {
  const { type, image, video } = heroMedia || {};

  if (type === "video")
    return <Video asset={video} videoStyles={videoStyles} />;

  if (type === "image") return <HeroImage image={image} />;

  return null;
};

export default HeroMedia;

const HeroImage = ({ image }: { image: ImageType }) => {
  const { url, caption, dominantColor, aspectRatio, width, height, lqip } =
    image;

  return (
    <HeroImageStyled
      src={url}
      alt={caption || "News Image"}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={lqip}
    />
  );
};

const HeroImageStyled = styled(FutureImage)`
  padding-top: var(--gap-m);
  right: 0;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: absolute;
    z-index: -1;
    width: 50%;
    height: fit-content;
  }
`;

const videoStyles = css`
  padding-top: var(--gap-m);

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: absolute;
    right: 0;
    width: 50%;
  }
`;
