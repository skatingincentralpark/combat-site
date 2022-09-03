import styled from "@emotion/styled";
import ColorStrips from "../components/color-strips";
import { StyledPageWrapper } from "../components/shared-styles/styled-page-wrapper";
import BillEvans from "../components/bill-evans";

const HomePage = () => {
  const chosenColors = [
    "var(--green-2)",
    "var(--green-3)",
    "var(--yellow-1)",
    "var(--yellow-2)",
    "var(--olive-1)",
    "red",
    "orange",
  ];

  const colors = [...chosenColors];

  return (
    <StyledPageWrapper>
      <BillWrapper>
        <BillEvans />
      </BillWrapper>
      {/* <ColorStrips colors={colors} /> */}
    </StyledPageWrapper>
  );
};

export default HomePage;

const BillWrapper = styled.div`
  position: relative;
  height: 50rem;
`;
