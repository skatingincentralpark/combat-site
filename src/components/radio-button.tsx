import styled from "@emotion/styled";

type Props = {
  value: string;
  name: string;
  index: number;
  selected: number | undefined;
  onClick: Function;
  available: boolean;
  fullWidth?: boolean;
  children: string;
};

const RadioButton = ({
  value,
  name,
  index,
  selected,
  onClick,
  available,
  fullWidth,
  children,
}: Props) => {
  return (
    <RadioLabelInputWrapper
      checked={selected === index}
      available={available}
      fullWidth={fullWidth}
    >
      <input
        onClick={() => onClick(index)}
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
  available: boolean;
  fullWidth?: boolean;
};
const RadioLabelInputWrapper = styled.label<RadioLabelInputWrapperProps>`
  background-color: ${({ checked }) =>
    checked ? "var(--green-1)" : "rgb(221, 221, 221)"};

  background-color: ${({ available }) => !available && "var(--gray-2)"};
  color: ${({ available }) => (!available ? "var(--gray-3)" : "white")};
  pointer-events: ${({ available }) => !available && "none"};

  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  height: var(--button-height);
  aspect-ratio: 1;
  width: ${({ fullWidth }) => fullWidth && "100%"};

  font-weight: 600;
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

  &:not(:last-of-type) {
    border-right: 0.5px solid white;
    border-color: var(--radio-border-color);
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
  height: 80%;
  margin: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: white;

  transition: opacity 100ms, transform 100ms;
  opacity: var(--circle-opacity);
  transform: var(--circle-transform);
`;
