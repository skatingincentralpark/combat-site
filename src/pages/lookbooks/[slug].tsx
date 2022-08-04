import client from "../../../client";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "../../components/carousel";

type LookbookProps = {
  lookbook: {
    _id: string;
    season: string;
    date: string;
    description: [];
    title: string;
    album: {
      aspectRatio: number;
      height: number;
      lqip: string;
      palette: {};
      width: number;
      url: string;
      caption: string;
    }[];
  };
};

const LookbookPage = ({ lookbook }: LookbookProps) => {
  return <Carousel lookbook={lookbook} />;
};

export default LookbookPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(`*[_type == "lookbook"][].slug.current`);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params!;
  const lookbook = await client.fetch(
    `
      *[_type == "lookbook" && slug.current == $slug] {
        _id,
        "slug": slug.current,
        season,
        date,
        description,
        title,
        album[]{ 
          caption,
          "url": asset -> url,
          "height": asset -> metadata.dimensions.height,
          "width": asset -> metadata.dimensions.width,
          "aspectRatio": asset -> metadata.dimensions.aspectRatio,
          "lqip": asset -> metadata.lqip,
          "palette": asset -> metadata.palette
        }
      }[0]
    `,
    { slug }
  );
  return {
    props: {
      lookbook,
    },
  };
};
