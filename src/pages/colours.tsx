import ColorStrips from "../components/color-strips";
import { StyledPageWrapper } from "../components/shared-styles/styled-page-wrapper";

const ColoursPage = () => {
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
      <ColorStrips colors={colors} />
    </StyledPageWrapper>
  );
};

export default ColoursPage;
