import styled from "@emotion/styled";

const StyledButton = styled.button`
  color: white;
  font-weight: 400;
  border-radius: var(--gap-4xs);
  padding: var(--gap-3xs) var(--gap-l);
  background-color: var(--green-1);
  width: 100%;
  height: var(--button-height);
  cursor: pointer;

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--green-2);
    }
  }
  &:active {
    background-color: var(--green-3);
  }
`;

export { StyledButton };
