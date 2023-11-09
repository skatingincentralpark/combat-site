import { HeroMediaType } from "types/newsTypes";
import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { HeroLayoutType } from "types/newsTypes";
import Image from "@components/image";

const Video = dynamic(() => import("@components/video"), {
  ssr: false,
});

/*
 * Returns Video or Image, these will be absolute or static dependant on heroLayout
 * Video and Image are styled with mediaStyles and a custom position dependant on heroLayout prop
 */

const HeroMedia = ({
  heroMedia,
  heroLayout,
}: {
  heroMedia: HeroMediaType;
  heroLayout: HeroLayoutType;
}) => {
  const { type, image, video } = heroMedia || {};

  const position = css`
    @media screen and (min-width: 700px) {
      position: ${heroLayout === "row" ? "absolute" : "relative"};
      width: ${heroLayout === "row" ? "50%" : "100%"};
    }
  `;

  if (type === "video")
    return (
      <Video
        asset={video}
        containerStyles={[mediaStyles, position]}
        defaultOnScreen
        controls={false}
      />
    );

  if (type === "image")
    return (
      <Image
        image={image}
        styles={[mediaStyles, position]}
        sizes="(max-width: 700px) 100vw, 50vw"
        priority
      />
    );

  return null;
};

export default HeroMedia;

const mediaStyles = css`
  margin-top: var(--gap-m);
  right: 0;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 700px) {
    margin-top: 0;
    position: absolute;
    width: 50%;
    height: fit-content;
  }
`;
