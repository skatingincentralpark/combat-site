import { useState } from "react";
import styled from "@emotion/styled";
import client from "../../../client";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "@components/carousel/carousel";
import { LookbookType } from "../../types/lookbookTypes";
import { StyledPageWrapperCentered } from "@components/shared-styles/page-wrappers";
import { LookbookDescription } from "@components/lookbook-description";
import Dropdown from "@components/dropdown";

const LookbookPage = ({ lookbook }: LookbookType) => {
  const [seasons, setSeasons] = useState([
    {
      id: 0,
      title: "2020SS",
      selected: true,
      key: "season",
    },
    {
      id: 1,
      title: "2020FW",
      selected: false,
      key: "season",
    },
    {
      id: 2,
      title: "2021SS",
      selected: false,
      key: "season",
    },
  ]);

  if (!lookbook) return <p>Loading...</p>;

  return (
    <StyledPageWrapperCentered>
      <div>
        <Carousel lookbook={lookbook} />
        <LookbookDescription
          title={lookbook.title}
          season={lookbook.season}
          date={lookbook.date}
          description={lookbook.description}
        />
      </div>
      <DropdownWrapper>
        <span>Choose a Location:</span>
        <Dropdown list={seasons} setList={setSeasons} />
      </DropdownWrapper>
    </StyledPageWrapperCentered>
  );
};

export default LookbookPage;

const DropdownWrapper = styled.div`
  padding: 0 var(--gap-xs);
  display: flex;
  align-items: center;

  & > span {
    margin-right: var(--gap-xxs);
  }
`;

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
