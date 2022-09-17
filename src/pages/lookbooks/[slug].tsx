import client from "../../../client";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "@components/carousel/carousel";
import { LookbookType } from "../../types/lookbookTypes";
import { StyledPageWrapperCentered } from "@components/shared-styles/page-wrappers";
import { LookbookDescription } from "@components/lookbook-description";

const LookbookPage = ({ lookbook }: LookbookType) => {
  if (!lookbook) return <p>Loading...</p>;

  return (
    <StyledPageWrapperCentered>
      <Carousel lookbook={lookbook} />
      <LookbookDescription
        title={lookbook.title}
        season={lookbook.season}
        date={lookbook.date}
        description={lookbook.description}
      />
    </StyledPageWrapperCentered>
  );
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
