import styled from "@emotion/styled";

import HeroHeadline from "@components/news/hero-headline";
import HeroSubheadline from "@components/news/hero-subheadline";
import HeroCredits from "@components/news/hero-credits";

import { type HeroTextOptions } from "types/newsTypes";

interface HeroTextProps {
  headlineText: string;
  subheadlineText: string;
  creditsText: { author: string; role: string }[];
  heroTextStyles: {
    headline: HeroTextOptions;
    subheadline: HeroTextOptions;
    credits: HeroTextOptions;
  };
}

const HeroText = ({
  headlineText,
  subheadlineText,
  creditsText,
  heroTextStyles,
}: HeroTextProps) => {
  const { headline, subheadline, credits } = heroTextStyles || {};
  return (
    <HeroTextWrapper>
      <HeroHeadline {...headline}>{headlineText}</HeroHeadline>
      <HeroSubheadline {...subheadline}>{subheadlineText}</HeroSubheadline>
      <HeroCredits {...credits}>
        {creditsText?.map(({ author, role }) => (
          <div key={role}>
            {role}: {author}
          </div>
        ))}
      </HeroCredits>
    </HeroTextWrapper>
  );
};

export default HeroText;

const HeroTextWrapper = styled.div`
  padding: var(--gap-l) var(--gap-xl) 0 var(--gap-xl);
  width: 100%;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  z-index: 2;
`;
