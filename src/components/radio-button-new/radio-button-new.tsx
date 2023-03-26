import styled from "@emotion/styled";

type Props = {
  value: string;
  name: string;
  index: number;
  selected: number | undefined;
  onClick: Function;
  available: boolean;
  children: string;
};
const RadioButtonNew = ({
  value,
  name,
  index,
  selected,
  onClick,
  available,
  children,
}: Props) => {
  const selectedText = selected === index ? "المحدد" : children;
  const selectedEmoji = selected === index ? "🐡" : "⚡️";

  return (
    <RadioLabelInputWrapper checked={selected === index} available={available}>
      <input
        onClick={() => onClick(index)}
        type="radio"
        value={value}
        name={name}
      />
      {selectedEmoji} {children}
    </RadioLabelInputWrapper>
  );
};

export default RadioButtonNew;

type RadioLabelInputWrapperProps = {
  checked: boolean;
  available: boolean;
};
const RadioLabelInputWrapper = styled.label<RadioLabelInputWrapperProps>`
  color: ${({ available }) => (!available ? "var(--gray-3)" : "lightgray")};
  color: ${({ checked }) => checked && "black"};
  text-decoration: ${({ available }) => !available && "line-through"};
  pointer-events: ${({ available }) => !available && "none"};

  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  cursor: pointer;
  touch-action: manipulation;

  display: flex;
  position: relative;
  padding: 0.1rem 0;

  & > input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;
