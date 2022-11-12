import { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledCenteredWrapper = styled.div`
  height: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 60rem;
`;

const ShopItemPage = () => {
  const sizes = ["s", "m", "l", "xl"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <StyledCenteredWrapper>
      <ShopItemWrapper>
        <img
          src="/images/tee-viktor.png"
          style={{ flexShrink: 0, maxWidth: `50%` }}
        />
        <ShopItemInfo>
          <ShopItemHeader>
            <span>Viktor Tee</span>
            <span>$70AUD</span>
          </ShopItemHeader>
          <ShopItemBody>
            <div>
              100% Deadstock American cotton. Lightweight and soft. Spun to
              create slubby texture (similar to t-shirts from the mid-90s).
              Silkscreen graphic printed. Boxy fit – longer sleeves and
              shortened body.
              <br />
              <br />
              Please be aware that the t-shirt will stretch 2-3cm in the
              shoulders & chest with wear. The collar is initially snug, however
              will stretch to a perfect fit with wear.
            </div>
            <div>
              <RadioGroup>
                {sizes.map((size) => (
                  <RadioButton
                    key={size}
                    value={size}
                    name="size"
                    selected={selectedSize}
                    onClick={setSelectedSize}
                  >
                    {size.toUpperCase()}
                  </RadioButton>
                ))}
              </RadioGroup>
            </div>
            <ShopButtonGroup>
              <Button onClick={() => {}}>Add To Cart</Button>
              <ButtonLink href="/shop">View All</ButtonLink>
            </ShopButtonGroup>
          </ShopItemBody>
        </ShopItemInfo>
      </ShopItemWrapper>
    </StyledCenteredWrapper>
  );
};

export default ShopItemPage;

const ShopItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }

  & > span:first-of-type {
    flex-shrink: 0;

    @media screen and (max-width: 700px) {
      flex-grow: 1;
    }
  }
`;

const ShopItemInfo = styled.div`
  border: 1px solid #d2dc9f;
  border-radius: 16px;

  height: fit-content;
  margin-left: 2rem;

  overflow: hidden;

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const ShopItemHeader = styled.div`
  background-color: #f5f8dd;
  border-bottom: 1px solid #d2dc9f;

  padding: 0.75rem 1rem;

  display: flex;
  justify-content: space-between;

  & > span:nth-of-type(1) {
    font-weight: 600;
  }
  & > span:nth-of-type(2) {
    color: #969696;
  }
`;

const ShopItemBody = styled.div`
  padding: 0 1rem;

  & > * {
    margin-bottom: 1rem;
  }

  & > div:first-of-type {
    padding: 1rem 0;
    border-bottom: 1px solid #969696;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ShopButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  & > button:first-of-type {
    flex-grow: 2;
    margin-right: 1rem;
  }
  & > button:nth-of-type(2) {
    flex-grow: 0.5;
    font-weight: 400;
  }
`;

type RadioButtonProps = {
  value: string;
  name: string;
  selected: string; // current selected state
  onClick: Function;
  children: string;
};

const RadioButton = ({
  value,
  name,
  selected,
  onClick,
  children,
}: RadioButtonProps) => {
  return (
    <StyledRadioLabelInput checked={selected === value}>
      <input
        onClick={() => onClick(value)}
        type="radio"
        value={value}
        name={name}
      />
      {children}
    </StyledRadioLabelInput>
  );
};

type StyledRadioLabelInputProps = {
  checked: boolean;
};
const StyledRadioLabelInput = styled.label<StyledRadioLabelInputProps>`
  background-color: ${({ checked }) => (checked ? "#37B44A" : "#DDDDDD")};
  border-left: 1px solid #b7b7b8;
  border-top: 1px solid #b7b7b8;
  border-bottom: 1px solid #b7b7b8;

  transition: background-color 0.25s cubic-bezier(0.25, 1, 0.5, 1);

  aspect-ratio: 1;
  height: 2.5rem;

  font-weight: 600;
  color: white;
  text-align: center;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-of-type(1) {
    border-radius: 8px 0 0 8px;
  }

  &:last-of-type {
    border-right: 1px solid #b7b7b8;
    border-radius: 0 8px 8px 0;
  }

  & > input {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;

type Props = {
  onClick: Function;
  children: string;
  noBg?: boolean;
};

const Button = ({ onClick, children, noBg = false }: Props) => {
  return (
    <StyledButton onClick={() => onClick()} noBg={noBg}>
      {children}
    </StyledButton>
  );
};

type StyledButtonProps = {
  noBg: boolean;
};
const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ noBg }) => (noBg ? "none" : "#37B44A")};

  padding: calc(2.75rem / 3) 1rem;
  height: 2.75rem;

  font-weight: 600;
  color: ${({ noBg }) => (noBg ? "#969696" : "white")};

  border-radius: 8px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Link that looks like a button

type ButtonLinkProps = {
  href: string;
  children: string;
};

const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  padding: calc(2.75rem / 3) 1rem;
  height: 2.75rem;

  color: #969696;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: red;
  }
`;
