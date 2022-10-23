import styled from "@emotion/styled";

/*
 * Hero:
 *  - Conists of text and image with options to change how they're laid out
 *  - Using the aspect ratio (inversed) of the hero image, we're able to maintain
 *    the correct height for the hero section, despite the image being absolutely positioned
 */

interface HeroOptions {
  layout?: "block" | "flex";
  heroImageAspect: number;
}

interface Props extends HeroOptions {
  children: React.ReactNode;
}

const Hero = ({ children, heroImageAspect }: Props) => {
  return <PageHero heroImageAspect={heroImageAspect}>{children}</PageHero>;
};

export default Hero;

const PageHero = styled.section<HeroOptions>`
  margin-top: var(--header-height);
  position: relative;
  height: fit-content;
  width: 100%;
  min-height: ${({ heroImageAspect }) => `calc(1 / ${heroImageAspect} * 50vw)`};

  @media screen and (min-width: 700px) {
    display: flex;
    display: ${({ layout }) => layout || "flex"};
  }
`;
