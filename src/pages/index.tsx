import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import { client } from "@lib/sanity";
import HeadSEO from "@components/head-seo";
import queries from "@lib/queries";
import Image from "@components/image";

const HomePage = ({ homePageImage }: { homePageImage: ImageType }) => {
  // const { url, width, height, caption, aspectRatio, dominantColor } =
  //   homePageImage;

  return (
    <>
      <HeadSEO title="Home" />
      <PageSection>
        <Image image={homePageImage} />

        {/* <img src="/images/poster/glitch.png" /> */}
      </PageSection>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const homePageData = await client.fetch(
    `
    *[_type == "generalSettings"]{
      homePageImage{
        ${queries.imageMeta}
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

const PageSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & > img {
    min-height: 100vh;
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: top;
  }

  &:first-of-type {
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
  }
`;
