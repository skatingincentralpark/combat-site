import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import client from "../../../client";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "@components/carousel/carousel";
import { LookbookType } from "../../types/lookbookTypes";
import { StyledPageWrapperCentered } from "@components/shared-styles/page-wrappers";
import { LookbookDescription } from "@components/lookbook-description";
import Dropdown from "@components/dropdown";
import { useRouter } from "next/router";
import HeadSEO from "@components/head-seo";

const LookbookPage = ({ lookbook }: LookbookType) => {
  return (
    <>
      <HeadSEO title={`Lookbook / ${lookbook?.title}`} />
      <StyledPageWrapperCentered>
        <div>
          <Carousel lookbook={lookbook} />
          <LookbookDescription
            title={lookbook?.title}
            season={lookbook?.season}
            date={lookbook?.date}
            description={lookbook?.description}
          />
        </div>
      </StyledPageWrapperCentered>
      <SeasonDropdown lookbook={lookbook} />
    </>
  );
};

export default LookbookPage;

// Seperated so dropdown state won't re-render Lookbook Page component
const SeasonDropdown = ({ lookbook }: LookbookType) => {
  const router = useRouter();

  // Default selected is true if it's current slug
  const [slugs, setSlugs] = useState(
    lookbook?.slugsAll?.map((x, i) => ({
      title: x,
      id: i,
      selected: x === router.query.slug,
    })) || []
  );

  // If selected slug and current slug are different, navigate
  useEffect(() => {
    const selectedSlug = slugs.find((x) => x.selected)?.title;

    if (selectedSlug && selectedSlug !== router.query.slug)
      router.push(selectedSlug);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugs]); // TO-DO: router required here - https://github.com/vercel/next.js/issues/18127

  return (
    <DropdownWrapper>
      <span>Choose a Location:</span>
      <Dropdown list={slugs} setList={setSlugs} />
    </DropdownWrapper>
  );
};

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
  // Should fix typing here
  const { slug = "" } = context.params!;
  const lookbook = await client.fetch(
    `
      *[_type == "lookbook" && slug.current == $slug] {
        _id,
        "slug": slug.current,
        "slugsAll": *[_type == "lookbook"][].slug.current,
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
