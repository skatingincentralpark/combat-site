import styled from "@emotion/styled";

const StyledButtonBase = styled.button`
  color: white;
  font-weight: 500;
  border-radius: var(--gap-3xs);
  padding: var(--gap-3xs) var(--gap-l);
  width: 100%;
  height: var(--button-height);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s, opacity 0.5s;
  line-height: 1;

  &:active {
    transform: scale(0.95);
  }
`;

const StyledButton = styled(StyledButtonBase)`
  background-color: var(--green-1);

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--green-2);
    }
  }
  &:active {
    background-color: var(--green-3);
  }
`;

const StyledButtonDanger = styled(StyledButtonBase)`
  background-color: red;
`;

export { StyledButton, StyledButtonDanger };
