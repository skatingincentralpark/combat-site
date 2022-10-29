import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import { client } from "@lib/sanity";
import HeadSEO from "@components/head-seo";

const HomePage = ({ homePageImage }: { homePageImage: ImageType }) => {
  const { url, width, height, caption, aspectRatio, dominantColor } =
    homePageImage;

  return (
    <>
      <HeadSEO title="Home" />
      <div>
        <img
          src="/images/poster/puffer.png"
          style={{
            width: `45rem`,
            paddingTop: `var(--header-height)`,
            margin: `auto`,
          }}
        />
      </div>
      {/* <PageSection>
        <img style={{ width: `100%` }} src="/images/poster/glitch.png" />
      </PageSection>
      <PageSection>
        <img style={{ width: `100%` }} src="/images/poster/baby.png" />
      </PageSection> */}
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = await client.fetch(
    `
    *[_type == "generalSettings"]{
      homePageImage{
        caption,
        "url": asset -> url,
        "height": asset -> metadata.dimensions.height,
        "width": asset -> metadata.dimensions.width,
        "aspectRatio": asset -> metadata.dimensions.aspectRatio,
        "lqip": asset -> metadata.lqip,
        "dominantColor": asset -> metadata.palette.dominant.background,
      },
    }[0]
  `
  );

  return {
    props: {
      homePageImage: homePageData.homePageImage,
    },
  };
};

const LandingPageWrapper = styled.main``;

const PageSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & > * {
    min-height: 100vh;
    object-fit: cover;
  }

  &:first-of-type {
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
  }
`;
const PageSectionRow = styled.section`
  display: flex;
  max-width: 100vw;
  width: 100%;
  display: block;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  & > * {
    min-height: 100vh;
    object-fit: cover;
  }
`;
