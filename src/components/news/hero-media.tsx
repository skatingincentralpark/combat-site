import styled from "@emotion/styled";
import { HeroMediaType } from "types/newsTypes";

const HeroMedia = ({ heroMedia }: { heroMedia: HeroMediaType }) => {
  const { type, image, video } = heroMedia;

  if (type === "video")
    return (
      <HeroVideo autoPlay playsInline muted loop>
        <source src={video?.url} />
        <meta itemProp="description" content="some caption" />
      </HeroVideo>
    );

  if (type === "image") return <HeroImage src={image.url} />;

  return null;
};

export default HeroMedia;

const HeroImage = styled.img`
  padding-top: var(--gap-m);
  right: 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: absolute;
    z-index: -1;
    width: 50%;
    height: fit-content;
  }
`;

const HeroVideo = styled.video`
  padding-top: var(--gap-m);
  right: 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: absolute;
    z-index: -1;
    width: 50%;
    height: fit-content;
  }
`;
