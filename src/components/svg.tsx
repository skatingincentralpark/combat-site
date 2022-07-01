import Image from "next/image";
import styled from "@emotion/styled";

type Props = {
  src: string;
  width: string;
};

const Svg = ({ src, width }: Props) => {
  return (
    <SvgWrapper width={width}>
      <Image src={src} layout="fill" objectFit="contain" />
    </SvgWrapper>
  );
};

export default Svg;

type SvgWrapperProps = {
  width: string;
};
const SvgWrapper = styled.span<SvgWrapperProps>`
  height: 100%;
  width: ${({ width }) => width && width};
  position: relative;
  display: block;
  user-select: none;

  & > span {
    height: 100%;
    height: 100%;
  }
`;
