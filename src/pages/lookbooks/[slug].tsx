import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { client } from "@lib/sanity";
import { GetStaticProps, GetStaticPaths } from "next";
import Carousel from "@components/carousel/carousel";
import { LookbookType } from "types/lookbookTypes";
import { LookbookDescription } from "@components/lookbook-description";
import Dropdown from "@components/dropdown";
import { useRouter } from "next/router";
import HeadSEO from "@components/head-seo";
import queries from "@lib/queries";
import { GetLookbook } from "data";

const LookbookPage = ({ lookbook }: { lookbook: LookbookType }) => {
  return (
    <>
      <HeadSEO title={`Lookbook / ${lookbook?.title}`} />
      <PageWrapper>
        <div>
          <Carousel lookbook={lookbook} />
          <LookbookDescription
            title={lookbook?.title}
            season={lookbook?.season}
            date={lookbook?.date}
            description={lookbook?.description}
          />
        </div>
        <SeasonDropdown lookbook={lookbook} />
      </PageWrapper>
    </>
  );
};

export default LookbookPage;

const PageWrapper = styled.main`
  padding-top: var(--gap-page-top);
  padding-bottom: var(--gap-xxl);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Seperated so dropdown state won't re-render Lookbook Page component
const SeasonDropdown = ({ lookbook }: { lookbook: LookbookType }) => {
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
      <span>Choose a collection:</span>
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

  const lookbook = await GetLookbook(slug);

  return {
    props: {
      lookbook,
    },
  };
};
