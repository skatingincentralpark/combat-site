import client from "../../../client";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "../../components/carousel";

type Props = {
  lookbook: {
    album: {
      asset: {
        metadata: {
          aspectRatio: number;
          height: number;
          lqip: string;
          palette: {};
          width: number;
        };
        url: string;
      };
      caption: string;
    }[];
    _id: string;
  };
};

const LookbookPage = ({ lookbook }: Props) => {
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
        album[]{ 
          caption, 
          slug, 
          asset -> {
            url,
            metadata {
              "height": dimensions.height,
              "width": dimensions.width,
              "aspectRatio": dimensions.aspectRatio,
              lqip,
              palette
            }
          }   
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
