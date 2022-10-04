import { useEffect, useState } from "react";
import FutureImage from "next/future/image";
import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import { StyledPageWrapper } from "@components/shared-styles/page-wrappers";
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

  const [imageLoaded, setImageLoaded] = useState(false);

  const doFadeIn = () => {
    setImageLoaded(true);
  };

  const testImages = [
    `/images/test/1.jpg`,
    `/images/test/2.jpg`,
    `/images/test/3.jpg`,
    `/images/test/4.jpg`,
    `/images/test/5.jpg`,
    `/images/test/6.jpg`,
    `/images/test/7.jpg`,
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const imageIndex = setInterval(() => {
      setSelectedImage((selectedImage) => (selectedImage + 1) % 7);
    }, 1500);

    return () => clearInterval(imageIndex);
  }, []);

  return (
    <PageWrapper px="xl">
      <HeadSEO title="Home" />
      <img
        src={testImages[selectedImage]}
        style={{
          margin: `auto`,
          maxWidth: `100%`,
          width: `60rem`,
          maxHeight: `50rem`,
          objectFit: `contain`,
        }}
      />
      {/* <ColorStrips /> */}
      {/*
      <BillWrapper
        style={{
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <FutureImage
          src={url}
          alt={caption}
          width={width}
          height={height}
          className={`transparent ${imageLoaded ? "hasLoaded" : ""}`}
          onLoadingComplete={doFadeIn}
        />
      </BillWrapper> */}
    </PageWrapper>
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

const PageWrapper = styled(StyledPageWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
`;

const BillWrapper = styled.div`
  position: relative;
  max-height: 50rem;
  margin-left: auto;

  & > img {
    height: 100%;

    &.transparent {
      opacity: 0;
      transition: opacity 0.25s linear;
      will-change: opacity;
    }
    &.hasLoaded {
      opacity: 1;
    }
  }
`;

const ColorStrips = () => {
  return (
    <StyledColorStrips>
      <div />
      <div />
      <div />
    </StyledColorStrips>
  );
};

const StyledColorStrips = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 100%;
  z-index: 1;

  & > * {
    min-height: 1rem;
    width: 100%;
  }
  & > *:nth-of-type(1) {
    background-color: #2570b2;
  }
  & > *:nth-of-type(2) {
    background-color: #e72024;
  }
  & > *:nth-of-type(3) {
    background-color: #ebc815;
  }
`;
