import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import { client } from "@lib/sanity";
import HeadSEO from "@components/head-seo";
import queries from "@lib/queries";
import Image from "@components/image";
import Video from "@components/video";
import { css } from "@emotion/react";

const HomePage = ({ homePageImage }: { homePageImage: ImageType }) => {
  // const { url, width, height, caption, aspectRatio, dominantColor } =
  //   homePageImage;

  return (
    <>
      <HeadSEO title="Home" />
      <PageSectionNew>
        {/* <HomeVideo /> */}
        <Image image={homePageImage} />
        {/* <img src="/images/poster/glitch.png" /> */}
      </PageSectionNew>
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

const PageSectionNew = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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

const HomeVideo = () => {
  const asset: VideoType = {
    url: "videos/monke.mp4",
    alt: "viktor",
    autoplay: true,
    caption: "viktor",
  };

  return (
    <Video
      asset={asset}
      containerStyles={css`
        width: 60%;
        height: 60%;
      `}
    />
  );
};
