import { GetStaticProps, GetStaticPaths } from "next";
import styled from "@emotion/styled";
import client from "../../../client";
import { NewsItemType } from "types/newsTypes";
import { ParsedUrlQuery } from "querystring";

import Article from "@components/news/article";
import Hero from "@components/news/hero";
import HeroHeadline from "@components/news/hero-headline";
import HeroSubheadline from "@components/news/hero-subheadline";
import HeroCredits from "@components/news/hero-credits";

const NewsArticle = ({ data }: { data: NewsItemType }) => {
  console.log(data);
  const { body, title, subtitle, heroImage, heroTextStyles, credits } =
    data || {};

  const { headline } = heroTextStyles;

  return (
    <>
      <Hero heroImageAspect={heroImage.aspectRatio}>
        <HeroText>
          <HeroHeadline
            fontSize={headline.fontSize}
            fontWeight={headline.fontWeight}
            width={headline.width}
            textAlign={headline.textAlign}
            containerAlign={headline.containerAlign}
          >
            {title}
          </HeroHeadline>
          <HeroSubheadline
            fontSize="small"
            fontWeight="light"
            width={50}
            textAlign="left"
            containerAlign="left"
          >
            {subtitle}
          </HeroSubheadline>
          <HeroCredits textAlign="left" containerAlign="left">
            Credits: WIP
          </HeroCredits>
        </HeroText>
        <HeroImage src={heroImage.url} />
      </Hero>
      <Article body={body} />;
    </>
  );
};

export default NewsArticle;

const HeroText = styled.div`
  padding: var(--gap-l) var(--gap-xl) 0 var(--gap-xl);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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
