import styled from "@emotion/styled";
import FutureImage from "next/future/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { css } from "@emotion/react";
import { clamp } from "@lib/helpers";
import { client } from "@lib/sanity";

import { useNextSanityImage } from "next-sanity-image";
import Video from "@components/video";

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
    margin: 0 auto;
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
type BlockMediaProps = {
  value: {
    caption: string;
    width: 20 | 25 | 33 | 50 | 66 | 75 | 100;
    align: "left" | "right" | "center";
  };
};
type BlockMediaPropsCloudinary = {
  value: {
    caption: string;
    alt: string;
    autoplay: boolean;
    width: 20 | 25 | 33 | 50 | 66 | 75 | 100;
    align: "left" | "right" | "center";
    asset: {
      url: string;
      height: number;
      width: number;
    };
  };
};

const o = {
  containerAligns: {
    left: `margin-right: auto;`,
    right: `margin-left: auto;`,
    center: `margin-left: auto; margin-right: auto; display: block !important;`,
  },
};

const BlockImage = ({ value }: BlockMediaProps) => {
  const imageProps = useNextSanityImage(client, value);
  const { caption, width, align } = value;

  if (!imageProps) return null;

  return (
    <div
      css={css`
        width: ${(width / 100) * 100}%;
        ${o.containerAligns[align]}
        display: inline-block;
        padding: 0;

        @media screen and (min-width: 700px) {
          padding: var(--gap-m);
        }
      `}
    >
      <FutureImage
        {...imageProps}
        alt={caption}
        style={{ width: `100%`, height: `100%`, objectFit: `contain` }}
      />
    </div>
  );
};

const BlockVideoCloudinary = ({ value }: BlockMediaPropsCloudinary) => {
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
      videoStyles={css`
        width: 100%;
        ${o.containerAligns[align]}
        display: inline-block;

        @media screen and (min-width: 700px) {
          width: ${(width / 100) * 100}%;
        }
      `}
    />
  );
};

// Config object that lets you customise the components used for different pt types
// Guide: https://github.com/sanity-io/block-content-to-react/issues/29#issuecomment-772393191
// Discussion on Typescript: https://github.com/portabletext/react-portabletext/issues/5#issuecomment-1057294157
const pt: PortableTextComponents = {
  types: {
    image: BlockImage,
    video: BlockVideoCloudinary,
  },
};
