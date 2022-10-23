import { GetStaticProps, GetStaticPaths } from "next";
import client from "../../../client";
import { NewsItemType } from "types/newsTypes";
import { ParsedUrlQuery } from "querystring";
import Article from "components/news/article";

const NewsArticle = ({ data }: { data: NewsItemType }) => {
  console.log(data);
  const { body } = data || {};
  return <Article body={body} />;
};

export default NewsArticle;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(`*[_type == "newsItem"][].slug.current`);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug = "" } = context.params as IParams;
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
