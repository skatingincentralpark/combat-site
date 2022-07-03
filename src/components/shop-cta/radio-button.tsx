import styled from "@emotion/styled";

type Props = {
  value: string;
  name: string;
  selected: string; // current selected state
  onClick: Function;
  children: string;
};

const RadioButton = ({ value, name, selected, onClick, children }: Props) => {
  return (
    <RadioLabelInputWrapper checked={selected === value}>
      <input
        onClick={() => onClick(value)}
        type="radio"
        value={value}
        name={name}
      />
      {children}
    </RadioLabelInputWrapper>
  );
};

export default RadioButton;

type RadioLabelInputWrapperProps = {
  checked: boolean;
};
const RadioLabelInputWrapper = styled.label<RadioLabelInputWrapperProps>`
  background-color: ${({ checked }) =>
    checked ? "var(--green-2)" : "var(--gray-2)"};

  transition: background-color 0.25s cubic-bezier(0.25, 1, 0.5, 1);

  height: 3rem;
  flex-grow: 1;

  font-weight: 600;
  color: white;
  text-align: center;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    border-radius: var(--gap-xs) 0 0 0;
  }

  &:last-of-type {
    border-radius: 0 var(--gap-xs) 0 0;
  }

  & > input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;
