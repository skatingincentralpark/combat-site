import { GetStaticProps, GetStaticPaths } from "next";
import client from "../../../client";
import { NewsItemArticle } from "types/newsTypes";
import { ParsedUrlQuery } from "querystring";

import Article from "@components/news/article";
import Hero from "@components/news/hero";
import HeroMedia from "@components/news/hero-media";
import HeroText from "@components/news/hero-text";

const NewsArticle = ({ data }: { data: NewsItemArticle }) => {
  const { body, title, subtitle, heroMedia, heroTextStyles, credits } =
    data || {};

  const { image, video, type } = heroMedia || {};
  const { height = 1, width = 1 } = video || {};

  const aspectForSectionHeight =
    type === "image" ? image.aspectRatio : width / height;

  return (
    <>
      <Hero heroMediaAspect={aspectForSectionHeight}>
        <HeroText
          headlineText={title}
          subheadlineText={subtitle}
          creditsText={credits}
          heroTextStyles={heroTextStyles}
        />
        <HeroMedia heroMedia={heroMedia} />
      </Hero>
      <Article body={body} />;
    </>
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
        heroMedia {
          type,
          image {
            caption,
            "url": asset -> url,
            "height": asset -> metadata.dimensions.height,
            "width": asset -> metadata.dimensions.width,
            "aspectRatio": asset -> metadata.dimensions.aspectRatio,
            "lqip": asset -> metadata.lqip,
            "palette": asset -> metadata.palette
          },
          video {
            "url": asset.url,
            "height": asset.height,
            "width": asset.width,
            autoplay,
            caption,
            alt
          }
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
        heroTextStyles {
          credits { containerAlign, fontSize, fontWeight, textAlign, width },
          headline { containerAlign, fontSize, fontWeight, textAlign, width },
          subheadline { containerAlign, fontSize, fontWeight, textAlign, width },
        }
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
