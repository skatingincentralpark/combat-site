import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@lib/sanity";
import { type NewsItemArticle } from "types/newsTypes";
import { ParsedUrlQuery } from "querystring";

import Article from "@components/news/article";
import Hero from "@components/news/hero";
import HeroMedia from "@components/news/hero-media";
import HeroText from "@components/news/hero-text";
import { getNewsItem } from "data";

const NewsArticle = ({ data }: { data: NewsItemArticle }) => {
  const {
    body,
    title,
    subtitle,
    heroLayout,
    heroMedia,
    heroTextStyles,
    credits,
  } = data || {};

  const { image, video, type } = heroMedia || {};
  const { height = 1, width = 1 } = video || {};

  const aspectForSectionHeight =
    type === "image" ? image.aspectRatio : width / height;

  return (
    <>
      <Hero heroMediaAspect={aspectForSectionHeight} heroLayout={heroLayout}>
        <HeroText
          headlineText={title}
          subheadlineText={subtitle}
          creditsText={credits}
          heroTextStyles={heroTextStyles}
        />
        <HeroMedia heroMedia={heroMedia} heroLayout={heroLayout} />
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
  const data = await getNewsItem(slug);

  return {
    props: {
      data,
    },
  };
};
