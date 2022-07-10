import styled from "@emotion/styled";

const Button = styled.button`
  color: white;
  font-weight: 600;
  border-radius: 0 0 var(--gap-xs) var(--gap-xs);
  padding: var(--gap-s) var(--gap-l);
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

export { Button };
