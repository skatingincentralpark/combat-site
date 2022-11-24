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
  padding: var(--gap-xl);

  p,
  strong,
  ul {
    line-height: 1.5em;
    font-size: ${clamp(14, 18)};
    max-width: 40em;
    margin: 1em auto;
  }

  p {
    margin-bottom: 1em;
  }

  blockquote {
    width: 70%;
    margin: var(--gap-3xl) 0;
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

const o = {
  containerAligns: {
    left: `margin-right: auto;`,
    right: `margin-left: auto;`,
    center: `margin-left: auto; margin-right: auto; display: block !important;`,
  },
};

const BlockImage = ({ value }: { value: BlockMediaImageProps }) => {
  const { width, align, image } = value;

  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox image={image} onClick={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>

      <div
        css={css`
          aspect-ratio: ${image.aspectRatio};
          width: 100%;
          width: ${(width / 100) * 100}%;
          height: fit-content;
          ${o.containerAligns[align]}
          display: inline-block;

          @media screen and (min-width: 700px) {
            padding: var(--gap-m);
          }

          & > img {
            width: 100%;
            cursor: pointer;
          }
        `}
      >
        <Image image={image} onClick={() => setLightboxOpen(true)} />
      </div>
    </>
  );
};

const BlockVideoCloudinary = ({ value }: { value: BlockMediaImageProps }) => {
  const { caption, alt, width, align, autoplay, asset } = value;

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
    <Video
      asset={assetObject}
      containerStyles={css`
        width: 100%;
        ${o.containerAligns[align]}
        display: inline-block;
        margin: 1em 0;
        z-index: 0;

        @media screen and (min-width: 700px) {
          width: ${(width / 100) * 100}%;
        }
      `}
    />
  );
};

interface BlockSoundcloudProps {
  url: string;
  title: string;
}

const SoundcloudEmbed = ({ value }: { value: BlockSoundcloudProps }) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow=""
      src={value.url}
    ></iframe>
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
