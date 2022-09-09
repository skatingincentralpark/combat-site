import { default as NextImage } from "next/image";
import styled from "@emotion/styled";
import { StyledPageWrapperCentered } from "../components/shared-styles/styled-page-wrapper";

const HomePage = () => {
  return (
    <StyledPageWrapperCentered px="xl">
      <ColorStrips />
      <BillWrapper>
        <NextImage
          src="/images/bill-splat.png"
          alt="Something"
          layout="fill"
          objectFit="cover"
        />
      </BillWrapper>
    </StyledPageWrapperCentered>
  );
};

export default HomePage;

const BillWrapper = styled.div`
  position: relative;
  max-height: 50rem;
  aspect-ratio: 2381 / 1849;
  margin-left: auto;
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
