import { useState } from "react";
import FutureImage from "next/future/image";
import { GetStaticProps } from "next";
import styled from "@emotion/styled";
import { StyledPageWrapperCentered } from "@components/shared-styles/page-wrappers";
import client from "../../client";

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

  return (
    <StyledPageWrapperCentered px="xl">
      <ColorStrips />
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
      </BillWrapper>
    </StyledPageWrapperCentered>
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
