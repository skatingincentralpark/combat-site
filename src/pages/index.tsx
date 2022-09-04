import styled from "@emotion/styled";
import { StyledPageWrapper } from "../components/shared-styles/styled-page-wrapper";
import BillEvans from "../components/bill-evans";

const HomePage = () => {
  return (
    <StyledPageWrapper>
      <BillWrapper>
        <BillEvans />
      </BillWrapper>
    </StyledPageWrapper>
  );
};

export default HomePage;

const BillWrapper = styled.div`
  position: relative;
  height: 50rem;
`;
