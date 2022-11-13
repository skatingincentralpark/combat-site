import { useState } from "react";
import FutureImage from "next/future/image";
import styled from "@emotion/styled";
import Link from "next/link";
import { clamp } from "@lib/helpers";
import tshirt from "../../../public/images/tee-viktor.png";

const StyledCenteredWrapper = styled.div`
  height: fit-content;
  margin: auto;
  min-height: 100%;

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
        <FutureImage src={tshirt} alt="Viktor T-Shirt" priority={true} />
        <ShopItemInfo>
          <ShopItemHeader>
            <span>Viktor Tee</span>
            <span>$70AUD</span>
          </ShopItemHeader>
          <ShopItemBody>
            <div>
              <p>
                100% Deadstock American cotton. Lightweight and soft. Spun to
                create slubby texture (similar to t-shirts from the mid-90s).
                Silkscreen graphic printed. Boxy fit – longer sleeves and
                shortened body.
              </p>
              <p>
                Please be aware that the t-shirt will stretch 2-3cm in the
                shoulders & chest with wear. The collar is initially snug,
                however will stretch to a perfect fit with wear.
              </p>
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
  height: 100%;
  flex-wrap: wrap;
  padding: var(--gap-page-top) var(--gap-m) var(--gap-m) var(--gap-m);

  @media screen and (min-width: 600px) {
    padding-top: 0;
    flex-wrap: nowrap;
  }

  & > img {
    height: auto;
    width: 100%;
    max-width: 40rem;

    @media screen and (min-width: 600px) {
      max-width: 50%;
    }
  }
`;

const ShopItemInfo = styled.div`
  border: 1px solid #d2dc9f;
  border-radius: 16px;

  height: fit-content;
  margin-left: 0;

  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 600px) {
    margin-left: 2rem;
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

  p,
  strong,
  ul {
    line-height: 1.5em;
    font-size: ${clamp(12, 14, 1440, 2560)};
    margin: 1em auto;
  }

  & > * {
    margin-bottom: 1rem;
  }

  & > div:first-of-type {
    border-bottom: 0.5px solid var(--gray-4);
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
      <div>{children}</div>
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

  &:active > div {
    transform: scale(0.8);
  }

  & > div {
    transition: transform 100ms;
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
