import styled from "@emotion/styled";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { css } from "@emotion/react";
import { clamp } from "@lib/helpers";

import Video from "@components/video";
import Lightbox from "@components/lightbox";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "@components/image";

const Article = ({ body }: { body: [] }) => {
  return (
    <ArticleContainer>
      <PortableText value={body} components={pt} />
    </ArticleContainer>
  );
};

export default Article;

const ArticleContainer = styled.main`
  color: #333333;

  p,
  strong,
  ul {
    line-height: 1.4em;
    font-size: ${clamp(14, 18)};
    max-width: 40em;
    margin: 1em auto;
  }

  p {
    padding: 0 var(--gap-xl);
    margin-bottom: 1em;
  }

  blockquote {
    width: 70%;
    margin: var(--gap-3xl) 0;
    padding: 0 var(--gap-xl);
    color: #333333;
    font-size: ${clamp(18, 25)};
    line-height: 1.3em;
    letter-spacing: -0.02em;
  }
`;

// Extra props for images and files (videos)
interface BlockMediaProps {
  caption: string;
  alt: string;
  padding: {
    paddingMobile: boolean;
    paddingDesktop: boolean;
  };
  width: 20 | 25 | 33 | 50 | 66 | 75 | 100;
  align: "left" | "right" | "center";
}
interface BlockMediaImageProps extends BlockMediaProps {
  image: ImageType;
}
interface BlockMediaImageProps extends BlockMediaProps {
  autoplay: boolean;
  asset: {
    url: string;
    height: number;
    width: number;
  };
}

const containerAligns = {
  left: `margin-right: auto;`,
  right: `margin-left: auto;`,
  center: `margin-left: auto; margin-right: auto; display: block !important;`,
};

const BlockImage = ({ value }: { value: BlockMediaImageProps }) => {
  const { width, align, image, padding } = value;

  const { paddingDesktop, paddingMobile } = padding || {};

  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox image={image} onClick={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>

      <div
        onClick={() => setLightboxOpen(true)}
        css={css`
          width: 100%;
          height: fit-content;
          ${containerAligns[align]}
          display: block;
          position: relative;
          margin-bottom: var(--gap-s);
          cursor: pointer;
          border-radius: 2rem;
          padding: ${paddingMobile ? "0 var(--gap-xl)" : "0"};
          padding-bottom: var(--gap-s);
          --opacity: 0;

          @media screen and (min-width: 700px) {
            padding: ${paddingDesktop ? "var(--gap-xs)" : "0"};
            padding-bottom: var(--gap-s);
            width: ${(width / 100) * 100}%;
            display: inline-block;
          }

          &:active {
            @media screen and (min-width: 700px) {
              outline: 1px dashed magenta;
            }
            --opacity: 1;
          }
        `}
      >
        <div
          css={css`
            background-color: #fdff19;
            width: 100%;
            height: 100%;
            position: absolute;
            inset: 0;
            mix-blend-mode: exclusion;
            backdrop-filter: brightness(0.5);
            pointer-events: none;
            border-radius: 2rem;
            transition: opacity 200ms;
            z-index: 1;
            opacity: var(--opacity);
          `}
        />
        <Image image={image} />
        <div
          css={css`
            margin: var(--gap-m) var(--gap-l) 0 var(--gap-l);
            max-width: 100%;

            @media screen and (min-width: 700px) {
              max-width: ${width > 75 && "35%"};
            }
          `}
        >
          Model (left) wears Maiden Name tank top, Paul Smith shorts and GmbH
          boots. Model (right) wears Paul Smith tank top and Ann Demeulemeester
          boots.
        </div>
      </div>
    </>
  );
};

const BlockVideoCloudinary = ({ value }: { value: BlockMediaImageProps }) => {
  const { caption, alt, width, align, autoplay, asset, padding } = value;

  const { paddingDesktop, paddingMobile } = padding || {};

  const assetObject = {
    url: asset.url,
    height: asset.height,
    width: asset.width,
    caption,
    alt,
    autoplay,
  };

  if (!asset?.url) return null;

  return (
    <div
      css={css`
        ${containerAligns[align]}
        padding: var(--gap-xs);
        display: inline-block; // currently this makes it so containerAligns doesn't work
        padding: ${paddingMobile ? "0 var(--gap-xl)" : "0"};
        padding-bottom: var(--gap-s);

        @media screen and (min-width: 700px) {
          width: ${(width / 100) * 100}%;
          padding: ${paddingDesktop ? "var(--gap-xs)" : "0"};
          padding-bottom: var(--gap-s);
        }
      `}
    >
      <Video
        asset={assetObject}
        containerStyles={css`
          aspect-ratio: ${asset.width /
          asset.height}; // needed to prevent layout shift, after video loads
        `}
      />
    </div>
  );
};

interface BlockSoundcloudProps {
  url: string;
  title: string;
}

const SoundcloudEmbed = ({ value }: { value: BlockSoundcloudProps }) => {
  return (
    <div
      css={css`
        height: 180px;
        background: #eeeeee;
        border-radius: 1rem;
        position: relative;
        margin: var(--gap-xl);
        border-radius: 4px;
        overflow: hidden;
      `}
    >
      <div
        css={css`
          background-color: #fdff19;
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          mix-blend-mode: exclusion;
          backdrop-filter: brightness(0.5);
          pointer-events: none;
        `}
      />
      <iframe
        width="100%"
        height="180"
        scrolling="no"
        frameBorder="no"
        allow=""
        src={value.url}
      ></iframe>
    </div>
  );
};

// Config object that lets you customise the components used for different pt types
// Guide: https://github.com/sanity-io/block-content-to-react/issues/29#issuecomment-772393191
// Discussion on Typescript: https://github.com/portabletext/react-portabletext/issues/5#issuecomment-1057294157
const pt: PortableTextComponents = {
  types: {
    image: BlockImage,
    video: BlockVideoCloudinary,
    soundcloudEmbed: SoundcloudEmbed,
  },
};
