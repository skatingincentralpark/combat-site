import { default as NextImage } from "next/image";
import styled from "@emotion/styled";

type Props = {
  src: StaticImageData;
  padding?: string;
  width?: string;
  widthMobile?: string;
  margin?: string;
};

const Image = ({ src, ...rest }: Props) => {
  console.log(src);
  return (
    <ImageWrapper {...rest}>
      <NextImage
        src={src.src}
        alt="Picture of the author"
        layout="responsive"
        objectFit="contain"
        width="100%"
        height="100%"
        placeholder="blur"
        blurDataURL={src.blurDataURL}
      />
    </ImageWrapper>
  );
};

export default Image;

type ImageWrapperProps = {
  padding?: string;
  width?: string;
  widthMobile?: string;
  margin?: string;
};

const ImageWrapper = styled.div<ImageWrapperProps>`
  padding: ${({ padding }) => (padding ? padding : `0`)};
  margin: ${({ margin }) => (margin ? margin : `0`)};
  width: ${({ width }) => (width ? width : `100%`)};
  height: 100%;

  position: relative;

  @media screen and (min-width: 700px) {
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : `100%`)};
  }
`;
