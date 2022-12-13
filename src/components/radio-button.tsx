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
      <Circle />
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
    checked ? "var(--green-1)" : "rgb(221, 221, 221)"};

  transition: background-color 0.1s;

  height: var(--button-height);
  aspect-ratio: 1;

  font-weight: 600;
  color: white;
  text-align: center;

  cursor: pointer;
  touch-action: manipulation;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  --circle-opacity: 0;
  --circle-transform: scale(0.5);

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--green-2);
    }
  }

  &:active {
    background-color: var(--green-3);
    --circle-opacity: 1;
    --circle-transform: scale(0.8);
  }

  & > input {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  &:nth-of-type(1) {
    border-radius: var(--gap-xxs) 0 0 var(--gap-xxs);
  }

  &:last-of-type {
    border-radius: 0 var(--gap-xxs) var(--gap-xxs) 0;
  }
`;
const Circle = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: black;

  transition: opacity 100ms, transform 100ms;
  opacity: var(--circle-opacity);
  transform: var(--circle-transform);
`;
