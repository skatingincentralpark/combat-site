import styled from "@emotion/styled";
import FutureImage from "next/future/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { NewsItemType } from "types/newsTypes";
import { css } from "@emotion/react";
import { clamp } from "@lib/helpers";
import client from "../../../client";

import { useNextSanityImage } from "next-sanity-image";
import { getFile, SanityFileSource } from "@sanity/asset-utils";

const Article = ({ body }: { body: [] }) => {
  return (
    <ArticleContainer style={{ marginTop: `10rem` }}>
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
  value: SanityFileSource & {
    caption: string;
    width: 20 | 25 | 33 | 50 | 66 | 75 | 100;
    align: "left" | "right" | "center";
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

const BlockVideo = ({ value }: BlockMediaProps) => {
  const {
    asset: { url },
  } =
    getFile(value, {
      projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET!,
    }) || {};
  const { caption, width, align } = value;

  if (!url) return null;

  return (
    <div
      css={css`
        width: ${(width / 100) * 100}%;
        ${o.containerAligns[align]}
        width: 30%;
        display: inline-block;
      `}
    >
      <video autoPlay playsInline muted loop>
        <source src={url} />
        <meta itemProp="description" content={caption} />
      </video>
    </div>
  );
};

// Config object that lets you customise the components used for different pt types
// Guide: https://github.com/sanity-io/block-content-to-react/issues/29#issuecomment-772393191
// Discussion on Typescript: https://github.com/portabletext/react-portabletext/issues/5#issuecomment-1057294157
const pt: PortableTextComponents = {
  types: {
    image: BlockImage,
    file: BlockVideo,
  },
};
