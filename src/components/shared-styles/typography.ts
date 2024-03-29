import styled from "@emotion/styled";

const Heading = styled.h1`
  font-size: 22px;
  line-height: 1.3em;
  letter-spacing: 0.01em;

  @media screen and (min-width: 650px) {
    font-size: 24px;
    font-size: clamp(1.84rem, 1.5619rem + 0.5134vw, 2rem);
    line-height: 1.3em;
  }
`;

const HeadingSm = styled.h2`
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.01em;

  @media screen and (min-width: 650px) {
    font-size: 18px;
    font-size: clamp(1.34rem, 1.0619rem + 0.5134vw, 1.5rem);
    line-height: 1.4em;
  }
`;

type TextProps = {
  paragraph?: boolean;
};

const Text = styled.p<TextProps>`
  font-size: 14px;
  line-height: 1.5em;
  letter-spacing: 0.02em;

  margin-bottom: ${({ paragraph }) => paragraph && "1em"};

  @media screen and (min-width: 650px) {
    font-size: 15px;
    font-size: clamp(1.17rem, 1.031rem + 0.2567vw, 1.25rem);
    line-height: 1.5em;
  }
`;

const TextSm = styled.p<TextProps>`
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: 0.01em;

  margin-bottom: ${({ paragraph }) => paragraph && "1em"};

  @media screen and (min-width: 650px) {
    font-size: 14px;
    font-size: clamp(1rem, 0.7045rem + 0.5455vw, 1.17rem);
    line-height: 1.5em;
  }
`;

const TextXsm = styled.p<TextProps>`
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: 0.01em;

  &:not(:last-of-type) {
    margin-bottom: ${({ paragraph }) => paragraph && "1em"};
  }

  @media screen and (min-width: 650px) {
    &:hover {
      background-color: lightslategray;
    }

    line-height: 1.5em;
  }
`;

export { Heading, HeadingSm, Text, TextSm, TextXsm };
