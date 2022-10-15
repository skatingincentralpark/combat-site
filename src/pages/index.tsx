import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import client from "../../client";
import HeadSEO from "@components/head-seo";

const HomePage = ({ homePageImage }: { homePageImage: ImageType }) => {
  const {
    url,
    width,
    height,
    caption,
    aspectRatio,
    palette: {
      dominant: { background },
    },
  } = homePageImage;

  return (
    <LandingPageWrapper>
      <HeadSEO title="Home" />
      <PageSectionRow>
        <img src="/images/poster/dog.png" />
        <img src="/images/poster/puffer.png" />
      </PageSectionRow>
      <PageSection>
        <img style={{ width: `100%` }} src="/images/poster/glitch.png" />
      </PageSection>
      <PageSection>
        <img style={{ width: `100%` }} src="/images/poster/baby.png" />
      </PageSection>
    </LandingPageWrapper>
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
        "palette": asset -> metadata.palette
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

  &:first-of-type {
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
  }

  & > * {
    min-height: 100vh;
    object-fit: cover;
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
