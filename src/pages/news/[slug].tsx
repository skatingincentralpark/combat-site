import { GetStaticProps, GetStaticPaths } from "next";
import client from "../../../client";
import { NewsItemType } from "types/newsTypes";
import { css } from "@emotion/react";

import { PortableText } from "@portabletext/react";

const fixed = css`
  border: 1px solid pink;
  margin: auto;
`;

const myPortableTextComponents = {
  types: {
    //   image: ({value}) => <img src={value.imageUrl} />
    image: ({ value }) => <div>{JSON.stringify(value)}</div>,
  },
};
const NewsArticle = ({ data }: { data: NewsItemType }) => {
  console.log(data);
  const { body } = data;
  return (
    <main>
      {/* <div css={fixed}>{JSON.stringify(data)}</div> */}
      <PortableText value={body} components={myPortableTextComponents} />
    </main>
  );
};

export default NewsArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(`*[_type == "newsItem"][].slug.current`);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Should fix typing here
  const { slug = "" } = context.params!;
  const data = await client.fetch(
    `
      *[_type == "newsItem" && slug.current == $slug] {
        title,
        subtitle,
        "slug": slug.current,
        excerpt,
        location { lat, lng },
        credits[] {
          "author": author -> name,
          role
        },
        category,
        date,
        previewImages[] {
          caption,
          "url": asset -> url,
          "height": asset -> metadata.dimensions.height,
          "width": asset -> metadata.dimensions.width,
          "aspectRatio": asset -> metadata.dimensions.aspectRatio,
          "lqip": asset -> metadata.lqip,
          "palette": asset -> metadata.palette
        },
        heroImage {
          caption,
          "url": asset -> url,
          "height": asset -> metadata.dimensions.height,
          "width": asset -> metadata.dimensions.width,
          "aspectRatio": asset -> metadata.dimensions.aspectRatio,
          "lqip": asset -> metadata.lqip,
          "palette": asset -> metadata.palette
        },
        body,
        heroTextStyles
      }[0]
    `,
    { slug }
  );
  return {
    props: {
      data,
    },
  };
};
