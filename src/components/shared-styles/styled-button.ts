import styled from "@emotion/styled";

const StyledButton = styled.button`
  color: white;
  font-weight: 600;
  border-radius: var(--gap-xs);
  padding: var(--gap-s) var(--gap-xxl);
  background-color: var(--green-1);
  width: 100%;
  height: var(--button-height);
  cursor: pointer;

  &:hover {
    background-color: var(--green-2);
  }
  &:active {
    background-color: var(--green-3);
  }
`;

export { StyledButton };
